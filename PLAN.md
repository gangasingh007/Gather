# Gather — Full-Stack Event Discovery & Booking Platform

> **Project thesis:** Build a serious real-world product, not an AI wrapper or CRUD demo. Gather is a two-sided platform for discovering, booking, attending, and operating real-world events.

---

## 1. Product Overview

### One-line description

**Gather lets people discover, plan, book, attend, and interact with real-world events, while giving organizers tools to manage the entire event lifecycle.**

### Example events

- College hackathons
- Tech meetups
- Workshops
- Concerts
- Sports tournaments
- Stand-up shows
- Photography walks
- Startup events
- College fests
- Community gatherings

### Core product model

```text
                         GATHER
                            │
              ┌─────────────┴─────────────┐
              │                           │
         ATTENDEES                    ORGANIZERS
              │                           │
       Discover events              Create events
       Book tickets                 Manage capacity
       Join waitlists               Manage bookings
       Get QR tickets               Check-in users
       Review events                Live updates
                                   Analytics
```

The goal is to build a **system**, not just a CRUD application.

---

# 2. Why This Project

Gather is designed to exercise the major skills expected from a modern full-stack engineer.

| Skill | Demonstrated Through |
|---|---|
| React / Next.js | Entire frontend |
| TypeScript | Full application |
| Responsive UI | Event discovery + booking |
| CRUD | Events, venues, bookings, reviews |
| REST API | Core backend |
| Authentication | Users + organizers |
| Authorization | RBAC |
| PostgreSQL | Relational event data |
| Prisma | ORM/data layer |
| Transactions | Booking |
| Redis | Caching + rate limiting |
| WebSockets | Live event updates |
| File uploads | Event images |
| Search/filtering | Event discovery |
| Pagination | Event feeds |
| QR codes | Tickets/check-in |
| Background jobs | Notifications |
| Email | Booking confirmations |
| Payments | Advanced phase |
| Testing | API + critical flows |
| Docker | Deployment |
| CI/CD | GitHub Actions |
| System design | Architecture decisions |
| Analytics | Organizer dashboard |

### Core principle

> **Every technology must have a real product reason.**

Do not add technologies merely to make the resume look impressive.

---

# 3. Product Scope

## Attendee Experience

An attendee should be able to:

1. Discover events
2. Search and filter events
3. View detailed event information
4. Select ticket types
5. Book tickets
6. Cancel bookings
7. Join waitlists
8. Receive notifications
9. View digital tickets
10. Use QR tickets for check-in
11. Review attended events
12. Receive real-time event announcements

## Organizer Experience

An organizer should be able to:

1. Create events
2. Edit events
3. Publish/unpublish events
4. Upload event images
5. Configure ticket types
6. Set capacity
7. View bookings
8. Manage attendees
9. Check in attendees
10. Send announcements
11. View analytics
12. Monitor revenue
13. Export attendee data

---

# 4. Core User Flow

```text
Discover
   ↓
Search / Filter
   ↓
Event Details
   ↓
Select Ticket
   ↓
Book
   ↓
Payment (optional MVP)
   ↓
Booking Confirmation
   ↓
Generate Ticket
   ↓
QR Code
   ↓
Attend Event
   ↓
QR Check-in
   ↓
Real-time Updates
   ↓
Review
```

---

# 5. Event Page

Each event should provide much more than a name, date, and price.

### Event page structure

```text
┌──────────────────────────────────────────────┐
│              EVENT COVER IMAGE              │
└──────────────────────────────────────────────┘

TechFest 2026
Annual Technology & Innovation Festival

📍 Chandigarh
📅 12 October
🕐 10:00 AM – 8:00 PM

★★★★☆ 4.7     842 attending

[ BOOK TICKET ]

──────────────────────────────────────────────

About

...

Schedule
10:00  Opening
11:00  Keynote
13:00  Lunch
15:00  Hackathon
18:00  Awards

──────────────────────────────────────────────

Who's going?

[avatars] [avatars] +142

──────────────────────────────────────────────

Venue
Interactive map

──────────────────────────────────────────────

Reviews
...
```

---

# 6. Booking System

The booking system should demonstrate real backend engineering.

### Example

```text
Event capacity = 100
Current bookings = 99
```

Two users attempt to book simultaneously.

The backend must never accidentally create:

```text
101 attendees
```

### Transactional booking flow

```text
BEGIN TRANSACTION

Check available capacity

IF capacity > 0:
    Create booking
    Decrease available seats
ELSE:
    Reject / offer waitlist

COMMIT
```

This should be implemented using proper PostgreSQL transaction/concurrency handling.

### Important test case

> Two users attempting to purchase the final available ticket simultaneously.

---

# 7. Waitlist System

When an event is full:

```text
EVENT FULL

42 people are waiting.

[ JOIN WAITLIST ]
```

When a booking is cancelled:

```text
Cancellation
     ↓
Find next eligible waitlisted user
     ↓
Reserve seat temporarily
     ↓
Notify user
     ↓
Payment / confirmation
```

This introduces:

- Queue management
- State transitions
- Background jobs
- Notifications
- Capacity management

---

# 8. QR Ticket & Check-in

Each confirmed booking receives a digital ticket.

```text
┌─────────────────────┐
│                     │
│       QR CODE       │
│                     │
│                     │
│  GTH-8F29-A71       │
│                     │
└─────────────────────┘
```

Organizer dashboard:

```text
CHECK-IN

[ Scan QR ]

Registered       847
Checked in       632
Remaining        215

██████████████░░░░
74.6%
```

Ticket state transition:

```text
BOOKED
   ↓
CHECKED_IN
```

Duplicate check-ins must be rejected.

---

# 9. Real-Time Features

Add real-time functionality to make the product feel like a real platform.

### Example

```text
🔴 LIVE

TechFest 2026

Currently attending: 632

Announcements

Organizer:
"Workshop Hall B has moved to Hall C."

2:41 PM
```

All active attendees can receive announcements instantly.

### Architecture

```text
Organizer
    ↓
WebSocket Server
    ↓
Redis Pub/Sub
    ↓
Connected Attendees
```

Possible real-time features:

- Event announcements
- Live attendance count
- Check-in updates
- Schedule changes
- Organizer messages

---

# 10. Organizer Dashboard

The organizer dashboard should be a second major application inside Gather.

```text
Gather / Organizer

Overview

Events
Bookings
Attendees
Check-in
Analytics
Settings

────────────────────────────────

Upcoming Events

TechFest 2026
847 / 1000 attendees

███████████████░░░

₹2,14,700 revenue

Check-in
74.6%

Bookings
↑ 18.4%
```

### Analytics

Show:

- Bookings over time
- Revenue
- Attendance
- Check-in rate
- Conversion funnel
- Ticket type performance
- Event traffic

Example funnel:

```text
Traffic → Event page → Booking → Payment

12,420      4,210       1,204
```

---

# 11. Database Design

Use **PostgreSQL** because the product contains strongly relational data and transactional workflows.

### Core entities

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

### Relationships

```text
User
 ├── Profile
 ├── Bookings
 ├── Reviews
 └── Notifications

Organizer
 └── Events

Event
 ├── Venue
 ├── TicketTypes
 ├── Bookings
 ├── Reviews
 ├── Attendees
 ├── Announcements
 └── EventImages

Booking
 ├── User
 ├── Event
 ├── Ticket
 └── Payment

Ticket
 └── CheckIn

Event
 └── WaitlistEntries
```

---

# 12. Authentication & Authorization

Use role-based access control.

```text
USER
 │
 ├── ATTENDEE
 │
 └── ORGANIZER

ADMIN
```

### Permissions

| Action | Attendee | Organizer | Admin |
|---|---:|---:|---:|
| Browse events | ✓ | ✓ | ✓ |
| Book | ✓ | ✓ | ✓ |
| Review | ✓ | ✓ | ✓ |
| Create event | ✗ | ✓ | ✓ |
| Edit own event | ✗ | ✓ | ✓ |
| Check-in | ✗ | ✓ | ✓ |
| Delete any event | ✗ | ✗ | ✓ |

Authentication should include:

- Registration
- Login
- Logout
- Session management
- Password hashing
- Protected routes
- Role-based authorization

---

# 13. REST API Design

Build a dedicated REST API.

## Authentication

```http
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
GET  /api/auth/me
```

## Events

```http
GET    /api/events
GET    /api/events/:id
POST   /api/events
PATCH  /api/events/:id
DELETE /api/events/:id
```

## Bookings

```http
POST   /api/events/:id/bookings
GET    /api/bookings
GET    /api/bookings/:id
DELETE /api/bookings/:id
```

## Waitlist

```http
POST   /api/events/:id/waitlist
DELETE /api/events/:id/waitlist
```

## Organizer

```http
GET /api/organizer/events
GET /api/organizer/events/:id/analytics
GET /api/organizer/events/:id/attendees
```

## Check-in

```http
POST /api/tickets/:id/check-in
```

## Reviews

```http
POST   /api/events/:id/reviews
PATCH  /api/reviews/:id
DELETE /api/reviews/:id
```

---

# 14. Backend Architecture

Use a layered architecture.

```text
Frontend
   │
   │ REST
   ▼
Express API
   │
   ├── Routes
   ├── Controllers
   ├── Services
   ├── Validation
   ├── Authorization
   └── Data Access
          │
          ▼
       Prisma
          │
          ▼
      PostgreSQL
```

### Recommended backend principles

- Controllers should remain thin
- Business logic belongs in services
- Validate request bodies with Zod
- Enforce authorization server-side
- Use transactions for critical state changes
- Return consistent API responses
- Centralize error handling
- Log important server events

---

# 15. Redis

Redis should be used only where it provides real value.

## Use case 1 — Rate limiting

Protect:

```http
POST /api/auth/login
```

from abusive requests.

## Use case 2 — Caching

Cache popular queries such as:

```http
GET /api/events/trending
```

## Use case 3 — Real-time Pub/Sub

```text
Organizer
    ↓
Redis Pub/Sub
    ↓
WebSocket Server
    ↓
Attendees
```

---

# 16. Background Jobs

Use **BullMQ + Redis** for asynchronous tasks.

### Example: Booking confirmation

```text
Booking confirmed
       ↓
Queue
       ↓
Email service
```

### Example: Event reminder

```text
Event starts tomorrow
       ↓
Queue
       ↓
Reminder email
```

### Example: Waitlist promotion

```text
Cancellation
       ↓
Queue
       ↓
Find next waitlisted user
       ↓
Notify
```

Possible jobs:

- Booking confirmation
- Email notification
- Event reminder
- Waitlist promotion
- Organizer announcement
- Payment reconciliation
- Ticket generation

---

# 17. Payments

Payments should be a **Phase 2/3 feature**, not the first feature.

Possible providers:

- Razorpay
- Stripe

### Payment flow

```text
BOOK
 ↓
Create pending booking
 ↓
Create payment order
 ↓
Payment
 ↓
Provider webhook
 ↓
Verify payment
 ↓
CONFIRMED
 ↓
Generate ticket
```

### Important rule

Never trust the frontend alone to report payment success.

The backend should verify payment state through the provider/webhook.

---

# 18. Search & Filtering

Start with PostgreSQL.

### Search

```text
"hackathon"
```

### Filters

```text
Location
Date
Category
Price
Online / Offline
Availability
```

### Sorting

```text
Upcoming
Popular
Price
Distance
```

### Future extension

For location-aware discovery:

```text
PostgreSQL
     +
PostGIS
```

Do not introduce Elasticsearch unless the product actually needs it.

---

# 19. UI / Design Direction

The design should feel like a premium event platform rather than an AI SaaS dashboard.

### Visual direction

```text
Background:
#0A0A0F

Style:
Premium
Minimal
Dark
Editorial
Photography-first

Elements:
Subtle borders
Large typography
Large event imagery
Soft gradients
Controlled glass effects
Smooth animations
```

Avoid excessive:

- Glow
- Glassmorphism
- Gradients
- Floating AI widgets
- Generic dashboard cards

The product should feel like a **real consumer platform**.

---

# 20. Page Map

```text
/
├── Discover
├── Events
│   └── [eventId]
├── Categories
├── Search
├── Bookings
│   └── [bookingId]
├── Tickets
├── Profile
│
└── Organizer
    ├── Dashboard
    ├── Events
    ├── Events/new
    ├── Events/[id]
    ├── Bookings
    ├── Attendees
    ├── Check-in
    ├── Analytics
    └── Settings
```

---

# 21. Technology Stack

## Frontend

```text
Next.js
TypeScript
Tailwind CSS
shadcn/ui
TanStack Query
Zustand
Framer Motion
Recharts
```

### Responsibilities

- Next.js → routing, rendering, SEO
- TanStack Query → server state
- Zustand → lightweight client state
- Tailwind → styling
- shadcn/ui → accessible components
- Framer Motion → animations
- Recharts → organizer analytics

---

## Backend

```text
Node.js
Express.js
TypeScript
Zod
Prisma
```

---

## Database

```text
PostgreSQL
Redis
```

---

## Real-time

```text
WebSockets / Socket.IO
Redis Pub/Sub
```

---

## Background Jobs

```text
BullMQ
Redis
```

---

## Storage

```text
Cloudinary
or
S3-compatible object storage
```

---

## Testing

```text
Vitest
Supertest
Playwright
```

---

## DevOps

```text
Docker
GitHub Actions
Linux
```

---

## Deployment

```text
Vercel
+
Cloud Run / Railway / equivalent backend host
+
Managed PostgreSQL
+
Managed Redis
```

---

# 22. Development Roadmap

## Phase 0 — Product Design

**Duration: 2–3 days**

Create:

- Product vision
- User personas
- User flows
- Feature specification
- Database ERD
- API specification
- Wireframes
- Design system

### Deliverables

```text
Figma
ER Diagram
API Specification
README Architecture
```

---

# Phase 1 — Foundation

**Duration: 3–4 days**

Set up:

- GitHub repository
- Monorepo
- Next.js
- Express
- PostgreSQL
- Prisma
- Docker
- TypeScript
- ESLint
- Prettier

### Suggested structure

```text
gather/
│
├── apps/
│   ├── web/
│   └── api/
│
├── packages/
│   ├── types/
│   ├── validation/
│   └── config/
│
├── docker-compose.yml
└── README.md
```

---

# Phase 2 — Authentication

**Duration: ~3 days**

Implement:

- Register
- Login
- Logout
- Session handling
- Password hashing
- Role-based access
- Protected routes
- API authorization

---

# Phase 3 — Events

**Duration: 5–7 days**

Implement:

- Create event
- Edit event
- Delete event
- Publish/unpublish
- Upload images
- Categories
- Venues
- Event discovery
- Search
- Filters
- Pagination

This is the first major CRUD module.

---

# Phase 4 — Booking

**Duration: 5–7 days**

Implement:

- Ticket types
- Capacity
- Booking
- Cancellation
- Booking history
- PostgreSQL transactions
- Concurrency handling

### Critical test

Two users attempt to book the last ticket simultaneously.

---

# Phase 5 — Tickets & QR

**Duration: 3–4 days**

Implement:

- Ticket generation
- QR generation
- Ticket page
- QR scanner
- Check-in
- Duplicate check-in prevention

---

# Phase 6 — Organizer Dashboard

**Duration: 5–7 days**

Build:

- Event management
- Attendee list
- Booking management
- Revenue
- Check-in statistics
- Charts
- CSV export

---

# Phase 7 — Real-time

**Duration: 4–5 days**

Add:

- WebSockets
- Redis Pub/Sub
- Live announcements
- Live attendance
- Real-time check-in updates

---

# Phase 8 — Notifications

**Duration: 2–4 days**

Implement:

- Email confirmation
- Booking reminders
- Cancellation notifications
- Waitlist notifications
- Event announcements

Use BullMQ for asynchronous processing.

---

# Phase 9 — Payments

**Duration: 4–6 days**

Implement:

- Payment order
- Checkout
- Webhook handling
- Payment verification
- Refund/cancellation flow

---

# Phase 10 — Polish

**Duration: 4–7 days**

Add:

- Loading skeletons
- Empty states
- Error states
- Optimistic UI where appropriate
- Accessibility
- Mobile responsiveness
- Animations
- Micro-interactions
- SEO
- OpenGraph previews
- 404 page
- Error boundaries

---

# 23. Testing Strategy

Testing should begin before the project is finished.

## Backend tests

Use:

```text
Vitest
Supertest
```

Test:

```text
Can a user book an event?
Can a user book a sold-out event?
Can an organizer edit another organizer's event?
Can a ticket be checked in twice?
Does cancellation release capacity?
Does waitlist promotion work?
Does authorization prevent unauthorized operations?
```

## End-to-end tests

Use:

```text
Playwright
```

Critical flows:

```text
Register
   ↓
Login
   ↓
Discover event
   ↓
Book ticket
   ↓
View ticket
   ↓
Check-in
```

---

# 24. Deployment Architecture

```text
                        GitHub
                           │
                           ▼
                      CI / CD
                    GitHub Actions
                           │
             ┌─────────────┴─────────────┐
             ▼                           ▼
         Next.js                     Express
             │                           │
             ▼                           ▼
          Vercel                    Cloud Run /
                                    Railway/etc.
                                         │
                          ┌──────────────┼──────────────┐
                          ▼              ▼              ▼
                     PostgreSQL       Redis       Object Storage
```

The backend should be containerized with Docker.

---

# 25. MVP vs Advanced Version

## MVP

Build only:

```text
Authentication
       +
Events CRUD
       +
Search/filter
       +
Booking
       +
Tickets
       +
Organizer dashboard
```

This should be the first complete release.

---

## Version 2

Add:

```text
Waitlist
QR check-in
Redis
WebSockets
Notifications
Analytics
```

---

## Version 3

Add:

```text
Payments
Background jobs
Advanced search
Location intelligence
Reviews
Social/group features
```

---

## Version 4 — Optional

Add a small AI enhancement:

```text
Natural-language event discovery
```

Example:

> "Find me something tech-related this weekend under ₹500 within 20 km."

The system converts this into structured filters.

### Important

AI should remain an **optional enhancement**.

Gather should still be a valuable product if every AI feature is removed.

---

# 26. What NOT to Build

Do not turn the product into:

- AI Event Description Generator
- AI Event Planner
- AI Organizer Copilot
- AI Ticket Optimizer
- AI Analytics Assistant
- AI Event Chatbot
- AI Everything

The project identity should remain:

> **A well-engineered real-time event platform.**

---

# 27. Why Gather Is Stronger Than a Typical CRUD Project

### Typical portfolio project

```text
User
 ↓
Create item
 ↓
Edit item
 ↓
Delete item
```

### Gather

```text
Discovery
 ↓
Event
 ↓
Ticket selection
 ↓
Concurrent booking
 ↓
Payment
 ↓
Ticket generation
 ↓
Waitlist
 ↓
Notification
 ↓
QR check-in
 ↓
Real-time attendance
 ↓
Analytics
```

Gather contains multiple interconnected systems rather than isolated CRUD operations.

---

# 28. Interview Discussion Topics

The project should allow you to discuss:

### Why PostgreSQL?

Relational data, constraints, consistency, transactions.

### Why Redis?

Caching, rate limiting, Pub/Sub.

### How do you prevent overselling?

Database transactions and concurrency control.

### What happens when two users book the final ticket?

Atomic capacity handling inside a transaction.

### How does real-time notification work?

WebSockets + Redis Pub/Sub.

### Why background jobs?

To move slow/asynchronous work out of the request-response path.

### How does authentication work?

Session/token-based authentication.

### How does authorization work?

Role-based access control.

### How do you verify payments?

Server-side payment verification and provider webhooks.

### How would you scale it?

Discuss:

- Stateless API instances
- Caching
- Database indexing
- Read replicas
- Redis
- Queues
- Object storage
- Horizontal scaling
- WebSocket infrastructure

---

# 29. Portfolio Positioning

Do not describe it as:

> "Event management website"

Use:

> **Gather — A full-stack real-time platform for discovering, booking and operating live events.**

Suggested visual:

```text
                     GATHER

          DISCOVER      BOOK       ATTEND
              │           │          │
              ▼           ▼          ▼
           Search      Payments     QR
           Filters     Tickets      Check-in
           Venues      Waitlists    Live updates
                         │
                         ▼
                    ORGANIZERS
                         │
                    Analytics
                    Attendees
                    Operations
```

---

# 30. Resume Positioning

Only use claims that you have actually implemented and measured.

Example:

> **Gather — Real-Time Event Discovery & Booking Platform**  
> Full-stack event platform enabling discovery, ticket booking, waitlists and QR-based check-in, with separate attendee and organizer workflows.

Possible resume bullets:

> • Designed a TypeScript REST API with Express, PostgreSQL and Prisma supporting event discovery, transactional bookings, ticketing and organizer workflows.

> • Implemented concurrency-safe ticket reservations and waitlist promotion using PostgreSQL transactions and background jobs.

> • Built real-time event announcements and attendance updates using WebSockets and Redis Pub/Sub.

> • Developed an organizer analytics dashboard for bookings, revenue and event attendance with responsive data visualizations.

**Do not invent performance numbers. Measure them first, then include the actual numbers.**

---

# 31. Engineering Rules

## Rule 1 — No technology without a reason

```text
PostgreSQL
→ relational event/booking data

Redis
→ caching + real-time infrastructure

BullMQ
→ asynchronous work

WebSocket
→ live event updates

Prisma
→ database abstraction

Zod
→ API validation

Next.js
→ event discovery frontend + SEO

Express
→ dedicated REST API

Docker
→ reproducible backend environment
```

## Rule 2 — Build the core before the impressive extras

Do not start with:

- Redis
- WebSockets
- Payments
- AI

Start with:

```text
Auth
 ↓
Events
 ↓
Booking
 ↓
Tickets
 ↓
Organizer dashboard
```

Then expand.

## Rule 3 — Build for users, not for the resume

Every feature should have a product justification.

## Rule 4 — Measure before making performance claims

If you claim:

```text
"API handles 1,000 requests/sec"
```

you should have actually load-tested it.

---

# 32. Final Architecture

```text
                        ┌──────────────┐
                        │   Next.js    │
                        │   Frontend   │
                        └──────┬───────┘
                               │
                         REST / WS
                               │
                               ▼
                    ┌──────────────────┐
                    │  Express API     │
                    │   TypeScript     │
                    └────────┬─────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
              ▼              ▼              ▼
          PostgreSQL       Redis         BullMQ
              │              │              │
              │              │              ▼
              │              │        Background jobs
              │              │
              │              ▼
              │          WebSockets
              │
              ▼
            Prisma
```

---

# 33. Final Project Goal

The finished Gather project should demonstrate:

```text
Frontend Engineering
        +
Backend Engineering
        +
Database Design
        +
API Design
        +
Authentication
        +
Authorization
        +
Transactions
        +
Concurrency
        +
Caching
        +
Real-time Systems
        +
Background Jobs
        +
File Storage
        +
Testing
        +
DevOps
        +
Product Design
```

Most importantly:

> **Gather should feel like a real product that could exist independently of your portfolio.**

The project is already worthwhile without AI. AI, if eventually added, should solve a specific user problem rather than being the reason the project exists.

---

# 34. Next Planning Document

Before writing significant production code, create a detailed engineering specification containing:

1. Product vision
2. User personas
3. User journeys
4. Feature specification
5. Complete page map
6. Figma/design system
7. Database ERD
8. Complete Prisma schema
9. API specification
10. Authentication architecture
11. Booking/concurrency design
12. WebSocket architecture
13. Redis strategy
14. Background-job architecture
15. Folder structure
16. Development milestones
17. Testing strategy
18. Deployment architecture
19. Git/GitHub strategy
20. Portfolio/README strategy

That specification should be detailed enough that development can begin without repeatedly reinventing the architecture.
