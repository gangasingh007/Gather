# AGENTS.md — Gather

> Engineering instructions for AI coding agents and contributors working on the Gather codebase.

---

# 1. Project Identity

**Gather** is a production-oriented, full-stack event discovery, booking, and event operations platform.

It has two primary user experiences:

- **Attendee** — discover, book, attend, review
- **Organizer** — create, operate, monitor, and analyze events

Gather is intentionally **not an AI-first product**.

AI features, if added later, must solve a concrete user problem and must never become the product's identity.

The engineering goal is to build a system that could plausibly operate as a real product.

---

# 2. Core Engineering Principles

Agents must follow these principles throughout development.

## 2.1 Build the product, not the demo

Do not optimize for visually impressive code that does not work end-to-end.

Prefer:

```text
Correctness
>
Maintainability
>
Security
>
Accessibility
>
Performance
>
Visual polish
```

All six matter, but correctness comes first.

---

## 2.2 No unnecessary technology

Do not introduce a library, service, framework, or infrastructure component merely because it is popular.

Every dependency should have a concrete reason.

Examples:

```text
PostgreSQL
→ relational event/booking data and transactions

Redis
→ caching, rate limiting, Pub/Sub

BullMQ
→ background jobs

WebSockets / Socket.IO
→ real-time updates

Prisma
→ database access

Zod
→ runtime validation

TanStack Query
→ server-state management
```

If a feature can be implemented cleanly without another dependency, prefer the simpler solution.

---

## 2.3 Preserve simplicity

Do not over-engineer early versions.

Prefer:

```text
simple working architecture
```

over:

```text
distributed architecture for imaginary scale
```

Introduce complexity only when there is a demonstrated product or engineering requirement.

---

## 2.4 No fake functionality

Never create buttons, charts, APIs, or UI states that pretend to work when they do not.

If a feature is not implemented:

- mark it clearly as unavailable, or
- implement the minimum real functionality, or
- leave it out.

Do not hard-code fake success responses into production flows.

---

# 3. Repository Structure

The preferred repository structure is:

```text
gather/
│
├── apps/
│   ├── web/              # Next.js frontend
│   └── api/              # Express API
│
├── packages/
│   ├── types/            # Shared TypeScript types
│   ├── validation/       # Shared Zod schemas
│   └── config/           # Shared configuration
│
├── docs/
│   ├── architecture/
│   ├── api/
│   ├── database/
│   └── decisions/
│
├── prisma/
│   └── schema.prisma
│
├── docker-compose.yml
├── AGENTS.md
├── README.md
└── package.json
```

Do not reorganize the repository without a strong reason.

---

# 4. Technology Stack

## Frontend

Use:

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- TanStack Query
- Zustand
- Framer Motion
- Recharts

## Backend

Use:

- Node.js
- Express
- TypeScript
- Zod
- Prisma

## Data

Use:

- PostgreSQL
- Redis

## Real-time

Use:

- WebSockets or Socket.IO
- Redis Pub/Sub when multiple server instances require coordination

## Background jobs

Use:

- BullMQ
- Redis

## Testing

Use:

- Vitest
- Supertest
- Playwright

## Infrastructure

Use:

- Docker
- GitHub Actions

Do not replace these technologies casually.

---

# 5. Frontend Architecture

The frontend should be organized around product features rather than arbitrary component categories.

Prefer:

```text
components/
features/
lib/
hooks/
services/
types/
```

over a giant folder containing every component.

Example:

```text
apps/web/
├── app/
├── components/
│   ├── ui/
│   ├── navigation/
│   └── events/
├── features/
│   ├── auth/
│   ├── events/
│   ├── bookings/
│   ├── tickets/
│   └── organizer/
├── lib/
├── hooks/
├── services/
└── types/
```

---

# 6. Backend Architecture

Use a layered backend architecture.

```text
Request
  ↓
Route
  ↓
Controller
  ↓
Service
  ↓
Data Access / Prisma
  ↓
PostgreSQL
```

Supporting layers:

```text
Middleware
Validation
Authorization
Error handling
Logging
```

## Controllers

Controllers should:

- parse request context
- invoke services
- return HTTP responses

Controllers should not contain large business rules.

Bad:

```ts
router.post("/book", async (req, res) => {
  // 150 lines of booking logic
});
```

Prefer:

```ts
router.post("/book", bookingController.create);
```

with business logic in:

```text
bookingService.createBooking()
```

---

# 7. API Design Rules

Use RESTful resource-oriented endpoints.

Examples:

```http
GET    /api/events
GET    /api/events/:id
POST   /api/events
PATCH  /api/events/:id
DELETE /api/events/:id
```

Use consistent response structures.

Example:

```json
{
  "data": {},
  "meta": {}
}
```

For errors:

```json
{
  "error": {
    "code": "EVENT_SOLD_OUT",
    "message": "This event is currently sold out."
  }
}
```

Do not expose raw database errors to clients.

---

# 8. Validation

All external input must be validated.

Validate:

- Request bodies
- Query parameters
- Route parameters where appropriate
- Form submissions
- Webhook payloads

Use Zod.

Example:

```ts
const createEventSchema = z.object({
  title: z.string().min(3).max(120),
  description: z.string().min(20),
  startsAt: z.coerce.date(),
  capacity: z.number().int().positive(),
});
```

Never assume frontend validation is sufficient.

The backend is the final authority.

---

# 9. Authentication

Authentication must be implemented securely.

Requirements:

- Passwords must never be stored in plaintext.
- Authentication state must be server-verifiable.
- Protected API endpoints must verify authentication.
- Sensitive operations must require appropriate authorization.
- Logout must invalidate the relevant authentication state.
- Never store secrets in source code.

Never implement authentication using:

```text
localStorage:
  isLoggedIn = true
```

as the source of truth.

---

# 10. Authorization / RBAC

Gather has role-based access.

Primary roles:

```text
ATTENDEE
ORGANIZER
ADMIN
```

Authorization must happen on the server.

Example:

```text
User A owns Event A
User B attempts to edit Event A

→ reject
```

Never rely solely on hiding UI buttons.

The API must independently enforce permissions.

---

# 11. Database Rules

Use PostgreSQL as the source of truth for transactional product data.

Important entities include:

```text
User
Organizer
Event
Venue
EventCategory
TicketType
Booking
Payment
Ticket
WaitlistEntry
Review
Announcement
Notification
EventImage
CheckIn
```

Use foreign keys and constraints wherever appropriate.

Avoid storing relational data as arbitrary JSON when a proper relational model is more appropriate.

---

# 12. Booking & Capacity Rules

Booking is one of the most important correctness-critical areas.

Never implement:

```text
read capacity
→ decrement in application memory
→ save
```

without transactional/concurrency protection.

The system must prevent overselling.

Example:

```text
Capacity = 100
Confirmed bookings = 99

User A → attempts booking
User B → attempts booking

Only one user should receive the final available seat.
```

Use PostgreSQL transactions and appropriate locking/atomic operations.

---

# 13. Booking State Machine

Keep booking states explicit.

Example:

```text
PENDING
   │
   ├──→ CONFIRMED
   │
   ├──→ FAILED
   │
   └──→ CANCELLED
```

Do not create ambiguous boolean combinations such as:

```text
isPaid
isCancelled
isConfirmed
isActive
```

when a clear state machine would be more reliable.

Use enums where appropriate.

---

# 14. Ticket State Machine

Suggested states:

```text
ISSUED
   ↓
CHECKED_IN
```

Possible exceptional states:

```text
CANCELLED
INVALID
```

A checked-in ticket must not be checkable again.

The backend must enforce this.

---

# 15. Waitlist Rules

Waitlist promotion must be deterministic.

Suggested flow:

```text
Booking cancelled
        ↓
Capacity becomes available
        ↓
Find next eligible waitlist entry
        ↓
Reserve according to defined policy
        ↓
Notify attendee
        ↓
Attendee confirms / payment completes
        ↓
Booking confirmed
```

Document the exact policy before implementing it.

Do not silently invent business rules.

---

# 16. Payments

Payment providers are external systems and must be treated as untrusted external input.

Never trust:

```text
frontend says payment succeeded
```

as proof of payment.

Use provider-side verification/webhooks.

Payment flow:

```text
Create pending booking
        ↓
Create payment order
        ↓
User completes payment
        ↓
Provider webhook
        ↓
Verify webhook
        ↓
Update payment
        ↓
Confirm booking
        ↓
Generate ticket
```

Webhook handlers must be idempotent.

Repeated webhook delivery must not create duplicate bookings or payments.

---

# 17. Redis Rules

Redis should only be used where appropriate.

Valid uses:

- Caching
- Rate limiting
- Pub/Sub
- Job queues
- Short-lived ephemeral state

Do not make Redis the primary source of truth for bookings or payments.

PostgreSQL remains authoritative for transactional data.

---

# 18. Real-Time Architecture

Real-time updates should use:

```text
Client
  ↓
WebSocket
  ↓
WebSocket Server
  ↓
Redis Pub/Sub
```

Use real-time functionality for actual product needs:

- Event announcements
- Live attendance
- Check-in updates
- Schedule changes

Do not use WebSockets simply because they look impressive.

---

# 19. Background Jobs

Use BullMQ for work that does not need to block the HTTP response.

Examples:

```text
Booking confirmation email
Event reminder
Waitlist notification
Organizer announcement
Ticket generation
Payment reconciliation
```

Jobs should be:

- Retryable
- Idempotent where possible
- Observable
- Safe against duplicate execution

Do not put critical synchronous authorization or booking correctness into an eventually consistent background job.

---

# 20. File Uploads

Event images should use object storage or a dedicated media service.

Do not store large image blobs directly in PostgreSQL.

Store:

```text
image URL
metadata
event relation
```

Validate:

- File type
- File size
- Upload authorization

Never trust a filename or MIME type supplied by the client without validation.

---

# 21. Search & Filtering

Start with PostgreSQL-backed search.

Supported filters:

```text
Location
Date
Category
Price
Online / Offline
Availability
```

Support:

- Pagination
- Sorting
- Stable ordering
- Proper indexes

Do not introduce Elasticsearch/OpenSearch unless actual scale or search requirements justify it.

---

# 22. Frontend Data Fetching

Use TanStack Query for server state.

Do not duplicate server state unnecessarily in Zustand.

Use Zustand only for genuine client-side state such as:

- UI preferences
- temporary client state
- navigation-related state
- lightweight local interaction state

Avoid:

```text
API data
    ↓
TanStack Query
    +
same API data
    ↓
Zustand
```

unless there is a clear reason.

---

# 23. UI Design Rules

Gather should look like:

> Premium event platform + modern editorial interface.

Not:

> Generic SaaS dashboard.

Design principles:

- Strong typography
- Large event photography
- Clear hierarchy
- Restrained dark palette
- Subtle borders
- Intentional whitespace
- Controlled motion
- High contrast
- Excellent responsive behavior

Avoid:

- Excessive glassmorphism
- Excessive neon
- Excessive gradients
- Generic AI visual language
- Unnecessary floating widgets
- Overly rounded cards everywhere

---

# 24. Design System

Follow the design system defined for Gather.

Core palette:

```text
Background       #0A0A0F
Surface          #111116
Elevated         #17171D
Primary text     #F5F5F5
Secondary text   #A1A1AA
Muted text       #71717A
Border           #27272A
```

Accent colors should be used intentionally for:

- Primary actions
- Selected states
- Important information
- Availability
- Status

Do not introduce random colors per page.

---

# 25. Component Rules

Build reusable components when there is real reuse.

Good candidates:

```text
Button
Input
Dialog
Toast
Badge
EventCard
EventMetadata
TicketSelector
BookingSummary
DigitalTicket
MetricCard
DataTable
EmptyState
LoadingSkeleton
```

Do not create abstractions for one-off elements merely to appear architectural.

Avoid premature component abstraction.

---

# 26. Accessibility

Accessibility is a requirement, not a polish phase.

Ensure:

- Keyboard navigation
- Visible focus states
- Semantic HTML
- Accessible labels
- Sufficient color contrast
- Appropriate touch targets
- Screen-reader-friendly status messages
- Form error association

Do not communicate important information through color alone.

---

# 27. Responsive Design

Primary targets:

```text
Desktop: 1440px
Tablet: 1024px
Mobile: 390px
```

Mobile should not simply be a shrunken desktop layout.

Reconsider:

- Navigation
- Ticket booking
- Event information hierarchy
- Organizer tables
- Charts
- Sticky actions

Use mobile-specific patterns where appropriate.

---

# 28. Loading, Error, and Empty States

Every major feature should account for:

```text
Loading
Success
Empty
Error
Disabled
Unauthorized
Not Found
```

Examples:

### No events

```text
No events found.

Try changing your filters.
```

### Network failure

```text
We couldn't load events.

[ Try again ]
```

### Sold out

```text
SOLD OUT

[ Join waitlist ]
```

Do not leave blank white/dark spaces when data is unavailable.

---

# 29. Error Handling

Use centralized error handling on the backend.

Errors should have:

```text
HTTP status
machine-readable code
human-readable message
```

Never expose:

- Stack traces
- SQL errors
- Secrets
- Internal file paths
- Environment variables

in production responses.

---

# 30. Security Rules

Agents must treat all client input as untrusted.

Protect against:

- SQL injection through ORM-safe patterns
- XSS
- CSRF where applicable
- Broken authorization
- Mass assignment
- Rate abuse
- Malicious file uploads
- Credential leakage
- Insecure direct object references

Never commit:

```text
.env
API keys
database credentials
private tokens
service-account credentials
```

Use environment variables and secret management.

---

# 31. Environment Variables

Maintain a documented example file:

```text
.env.example
```

It may contain variable names and safe placeholders.

Example:

```env
DATABASE_URL=
REDIS_URL=
AUTH_SECRET=
STORAGE_BUCKET=
STORAGE_ACCESS_KEY=
STORAGE_SECRET_KEY=
PAYMENT_SECRET=
```

Never put real credentials into `.env.example`.

---

# 32. Testing Requirements

Critical business logic must be tested.

Minimum backend tests:

```text
Authentication
Authorization
Event creation
Event ownership
Booking
Capacity
Concurrency
Cancellation
Waitlist
Check-in
Payment webhook idempotency
```

Critical end-to-end flows:

```text
Register
→ Login
→ Discover
→ Open event
→ Book
→ View ticket
```

Organizer:

```text
Login
→ Create event
→ Publish
→ View attendees
→ Check in attendee
```

---

# 33. Test Before Refactoring

Before making a significant refactor:

1. Run relevant tests.
2. Make the change.
3. Run tests again.
4. Verify types.
5. Verify lint.
6. Verify the affected user flow.

Do not make broad changes without validating behavior.

---

# 34. Definition of Done

A feature is not complete merely because its UI exists.

A feature is considered complete when applicable:

- UI exists
- API exists
- Validation exists
- Authorization exists
- Database logic exists
- Error states exist
- Loading states exist
- Tests exist
- Mobile behavior works
- Accessibility has been considered
- Documentation is updated

For example, "booking UI completed" is not enough.

Booking is complete only when the actual booking workflow works safely end-to-end.

---

# 35. Development Workflow

For each feature:

```text
1. Understand requirement
2. Inspect existing architecture
3. Identify affected layers
4. Design data/API changes
5. Implement backend
6. Add tests
7. Implement frontend
8. Add loading/error/empty states
9. Test end-to-end
10. Review for security
11. Update documentation
```

Do not immediately start editing files before understanding the existing implementation.

---

# 36. Change Management

When modifying existing code:

- Preserve existing behavior unless the task explicitly changes it.
- Avoid unrelated refactors.
- Do not rename files unnecessarily.
- Do not rewrite working modules just for stylistic preference.
- Keep changes focused.
- Prefer small, reviewable commits.

---

# 37. Git Conventions

Use meaningful commits.

Examples:

```text
feat: add event creation flow
feat: implement transactional ticket booking
feat: add organizer analytics
fix: prevent duplicate ticket check-in
fix: handle sold-out event booking
refactor: extract booking service
test: add booking concurrency tests
docs: update API specification
```

Avoid commits such as:

```text
stuff
changes
final
working
updates
```

---

# 38. Documentation

Important architectural decisions should be documented.

Use:

```text
docs/architecture/
docs/api/
docs/database/
docs/decisions/
```

Document decisions such as:

- Why PostgreSQL?
- Why Redis?
- Why REST?
- Why WebSockets?
- How booking concurrency is handled
- How payments are verified
- How waitlists work

For meaningful architectural decisions, create an ADR:

```text
docs/decisions/001-booking-concurrency.md
```

---

# 39. API Documentation

Maintain an API reference containing:

- Endpoint
- HTTP method
- Authentication requirement
- Role requirement
- Request schema
- Response schema
- Error codes
- Example request
- Example response

The API documentation should stay synchronized with the implementation.

---

# 40. Database Migration Rules

Never manually modify production database structure without a migration.

Use Prisma migrations.

Before applying a schema change:

1. Understand existing data.
2. Determine whether the migration is destructive.
3. Consider backward compatibility.
4. Update application code appropriately.
5. Test migration locally.

Be especially careful with:

- Removing columns
- Renaming columns
- Changing nullable fields
- Changing enum values
- Changing relationships

---

# 41. Performance Rules

Optimize based on evidence.

Start with:

- Correct indexes
- Efficient queries
- Pagination
- Image optimization
- Caching where justified
- Avoiding unnecessary API calls
- Proper client/server boundaries

Do not prematurely introduce:

- Microservices
- Kafka
- Kubernetes
- Elasticsearch
- Complex distributed caching

unless actual requirements justify them.

---

# 42. Observability

Production systems should provide useful visibility.

Where appropriate, log:

- Authentication failures
- Booking failures
- Payment webhook events
- Background job failures
- Check-in errors
- Important server exceptions

Do not log:

- Passwords
- Authentication secrets
- Payment credentials
- Sensitive personal data unnecessarily

Use structured logs where practical.

---

# 43. AI Agent Behavior

When acting as a coding agent:

## Before changing code

Inspect:

- Existing file structure
- Relevant modules
- Existing types
- Existing tests
- Existing database schema
- Existing API patterns

Do not assume the repository matches the plan perfectly.

## Before creating a new abstraction

Ask:

> Does this abstraction solve an actual repeated problem?

If not, keep the implementation local.

## Before adding a dependency

Ask:

> Can the requirement be solved cleanly with the existing stack?

If yes, do not add the dependency.

---

# 44. Agent Anti-Patterns

Never:

- Rewrite the entire project for a small feature.
- Introduce an unnecessary framework.
- Replace working code without a reason.
- Hard-code production data.
- Fake API responses.
- Ignore authorization.
- Ignore error handling.
- Skip tests for booking/payment logic.
- Put secrets in source code.
- Duplicate server state unnecessarily.
- Build AI features just to make the product sound modern.
- Add infrastructure without a real use case.
- Create giant components containing unrelated logic.

---

# 45. AI Slop Prevention Rules

Gather must remain a real product.

Do not add:

```text
AI dashboard
AI assistant
AI copilot
AI-generated analytics
AI recommendations
AI event generator
AI chatbot
```

unless a specific user problem has been identified and the feature has a clear measurable benefit.

If an AI feature is proposed, the agent should first document:

```text
Problem:
Who has it:
Current solution:
Why AI is appropriate:
Expected benefit:
Failure modes:
Cost:
Privacy implications:
```

AI is optional.

Product quality is mandatory.

---

# 46. Product Integrity

Do not make the application look more complete than it actually is.

If payment is not implemented:

```text
Payment integration coming soon
```

is preferable to a fake payment success screen.

If real-time infrastructure is not implemented:

Do not display fake live data.

If analytics are not based on real data:

Do not label fabricated numbers as actual analytics.

Use seeded/demo data only when explicitly marked as demo data.

---

# 47. Seed Data

Development seed data should feel realistic.

Include:

- Several categories
- Multiple organizers
- Events in different states
- Different ticket types
- Some sold-out events
- Some upcoming events
- Some past events
- Reviews
- Bookings
- Check-ins

Clearly distinguish seeded development data from real production data.

---

# 48. UI Content Rules

Avoid generic placeholder copy such as:

```text
Lorem ipsum
Event Name
John Doe
Description goes here
```

Use realistic sample content.

Example:

```text
Northern India Developer Summit

A one-day gathering for engineers, founders,
designers and technology enthusiasts.

October 18, 2026
Chandigarh
₹499
```

Good content improves the realism of the interface.

---

# 49. Accessibility & UX Quality Gates

Before considering a major screen complete, verify:

```text
[ ] Keyboard navigation works
[ ] Focus states are visible
[ ] Buttons have clear labels
[ ] Forms show validation
[ ] Loading state exists
[ ] Error state exists
[ ] Empty state exists
[ ] Mobile layout works
[ ] No horizontal overflow
[ ] Contrast is sufficient
[ ] Important status is not conveyed by color alone
```

---

# 50. Final Quality Checklist

Before declaring Gather production-ready:

## Product

```text
[ ] Attendee flow works
[ ] Organizer flow works
[ ] Event lifecycle works
[ ] Booking lifecycle works
[ ] Ticket lifecycle works
[ ] Check-in works
[ ] Waitlist works
[ ] Notifications work
```

## Backend

```text
[ ] API is validated
[ ] Authorization is enforced
[ ] Transactions are used where needed
[ ] Errors are handled
[ ] Rate limiting exists where appropriate
[ ] Logging exists
```

## Database

```text
[ ] Relationships are correct
[ ] Constraints exist
[ ] Indexes exist for important queries
[ ] Migrations are reproducible
[ ] Seed data exists
```

## Frontend

```text
[ ] Responsive
[ ] Accessible
[ ] Loading states
[ ] Empty states
[ ] Error states
[ ] Consistent design system
[ ] No obvious layout issues
```

## Testing

```text
[ ] Unit tests
[ ] API tests
[ ] Booking concurrency tests
[ ] Authorization tests
[ ] E2E critical flows
```

## Security

```text
[ ] No secrets committed
[ ] Authentication secure
[ ] Authorization server-side
[ ] Input validated
[ ] Uploads validated
[ ] Webhooks verified
```

## Deployment

```text
[ ] Production environment configured
[ ] Database migrations tested
[ ] Docker image builds
[ ] CI passes
[ ] Environment variables documented
[ ] Error monitoring/logging available
```

---

# 51. Priority Order

When choosing what to build next, use this order:

```text
1. Core product correctness
2. Data integrity
3. Authentication / authorization
4. Booking reliability
5. User experience
6. Testing
7. Performance
8. Real-time features
9. Payments
10. Advanced enhancements
11. AI
```

Never sacrifice booking correctness for visual polish.

Never sacrifice security for development speed.

Never add complexity merely for a resume bullet.

---

# 52. Guiding Principle

> **Build Gather as if real people will depend on it.**

The finished application should not feel like:

> "A student made this to demonstrate CRUD."

It should feel like:

> "This is a thoughtfully engineered product that happens to demonstrate excellent engineering."

Every architectural decision, UI component, API endpoint, and database model should support that goal.
