export const FEATURED_EVENTS = [
  {
    id: "techfest-2026",
    title: "TechFest 2026",
    subtitle: "Annual Technology & Innovation Festival",
    location: "Chandigarh",
    date: "October 12, 2026",
    price: "₹499",
    image: "/images/images.jpg",
    cta: "BOOK NOW",
  },
  {
    id: "soundwave-festival",
    title: "Soundwave Festival",
    subtitle: "Three Nights of Indie & Electronic Music",
    location: "New Delhi",
    date: "November 8, 2026",
    price: "₹1,999",
    image: "/images/music.webp",
    cta: "BOOK NOW",
  },
  {
    id: "startup-summit",
    title: "Startup Summit",
    subtitle: "Where Founders Meet Investors",
    location: "Bengaluru",
    date: "December 2, 2026",
    price: "Free",
    image: "/images/startup.jpg",
    cta: "REGISTER",
  },
  {
    id: "art-expo-2026",
    title: "Art Expo 2026",
    subtitle: "Celebrating Contemporary Art & Design",
    location: "Mumbai",
    date: "January 15, 2027",
    price: "₹299",
    image: "/images/art.jpg",
    cta: "BOOK NOW",
  },
  {
    id: "comedy-night-delhi",
    title: "Comedy Night Delhi",
    subtitle: "Stand-up Comedy Extravaganza",
    location: "New Delhi",
    date: "February 20, 2027",
    price: "₹399",
    image: "/images/comedy.avif",
    cta: "BOOK NOW",
  },
  {
    id: "photography-workshop",
    title: "Photography Workshop",
    subtitle: "Master the Art of Photography",
    location: "Kolkata",
    date: "March 10, 2027",
    price: "₹799",
    image: "/images/photo.avif",
    cta: "REGISTER",
  },
  {
    id: "food-festival-2027",
    title: "Food Festival 2027",
    subtitle: "A Culinary Journey Across India",
    location: "Hyderabad",
    date: "April 5, 2027",
    price: "₹199",
    image: "/images/food.jpg",
    cta: "BOOK NOW",
  },{
    id:"movie-night-under-stars",
    title:"Movie Night Under the Stars",
    subtitle:"Outdoor Cinema Experience",
    location:"Pune",
    date:"May 22, 2027",
    price:"₹299",
    image:"/images/movie.jpg",
    cta:"BOOK NOW"
  }
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Discover",
    description:
      "Browse events happening near you. Filter by category, date, location, or price to find the perfect experience.",
    image: "/images/how-it-works/discover.png",
  },
  {
    step: "02",
    title: "Book",
    description:
      "Select your tickets and book instantly. Secure checkout with real-time capacity updates — no overselling.",
    image: "/images/how-it-works/book.png",
  },
  {
    step: "03",
    title: "Get Your Ticket",
    description:
      "Receive your digital ticket with a unique QR code. Access it anytime from your bookings — no printouts needed.",
    image: "/images/how-it-works/ticket.png",
  },
  {
    step: "04",
    title: "Check In",
    description:
      "Show your QR code at the venue. The organizer scans it, you're in. Fast, contactless, and tamper-proof.",
    image: "/images/how-it-works/checkin.png",
  },
] as const;

export const ORGANIZER_FEATURES = [
  {
    title: "Real-Time Analytics",
    description:
      "Track bookings, revenue, and attendance as they happen. Visual dashboards built for quick decisions.",
    image: "/images/organizer/analytics-icon.png",
  },
  {
    title: "QR Check-In Scanner",
    description:
      "Scan QR tickets at the door. Instant verification, duplicate prevention, and live attendance tracking.",
    image: "/images/organizer/checkin-icon.png",
  },
  {
    title: "Live Announcements",
    description:
      "Send instant updates to all attendees. Schedule changes, hall moves, important notices — delivered in real time.",
    image: "/images/organizer/announce-icon.png",
  },
] as const;

export const EVENT_CATEGORIES = [
  {
    name: "Tech & Code",
    count: 142,
    image: "/images/categories/tech.png",
    href: "/events?category=tech",
  },
  {
    name: "Music",
    count: 89,
    image: "/images/categories/music.png",
    href: "/events?category=music",
  },
  {
    name: "Sports",
    count: 67,
    image: "/images/categories/sports.png",
    href: "/events?category=sports",
  },
  {
    name: "Art & Design",
    count: 54,
    image: "/images/categories/art.png",
    href: "/events?category=art",
  },
  {
    name: "Startups",
    count: 38,
    image: "/images/categories/startups.png",
    href: "/events?category=startups",
  },
  {
    name: "Comedy & Stand-up",
    count: 45,
    image: "/images/categories/comedy.png",
    href: "/events?category=comedy",
  },
  {
    name: "Photography",
    count: 31,
    image: "/images/categories/photography.png",
    href: "/events?category=photography",
  },
  {
    name: "Food & Social",
    count: 73,
    image: "/images/categories/food.png",
    href: "/events?category=food",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Gather made finding events so easy. I booked my first hackathon in seconds — QR ticket, no hassle. This is how event platforms should work.",
    name: "Arjun Mehta",
    role: "Attendee",
    rating: 5,
    avatar: "/images/avatars/arjun.png",
  },
  {
    quote:
      "As an organizer, the dashboard gives me everything I need. Real-time bookings, check-in stats, revenue — all in one place. No more spreadsheets.",
    name: "Priya Sharma",
    role: "Event Organizer",
    rating: 5,
    avatar: "/images/avatars/priya.png",
  },
  {
    quote:
      "The QR check-in system is flawless. We processed 800 attendees in under an hour at our college fest. Zero duplicate entries.",
    name: "Kavya Reddy",
    role: "College Fest Coordinator",
    rating: 4,
    avatar: "/images/avatars/kavya.png",
  },
] as const;

export const TRUSTED_BY_LOGOS = [
  { name: "EventFlow", width: 120 },
  { name: "NexaConf", width: 110 },
  { name: "UrbanBeat", width: 115 },
  { name: "CampusHQ", width: 120 },
  { name: "LaunchPad", width: 118 },
] as const;

export const FOOTER_LINKS = {
  product: {
    title: "Product",
    links: [
      { label: "Discover", href: "/events" },
      { label: "Events", href: "/events" },
      { label: "Categories", href: "/categories" },
      { label: "For Organizers", href: "/organizer" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  connect: {
    title: "Connect",
    links: [
      { label: "Twitter", href: "https://twitter.com" },
      { label: "GitHub", href: "https://github.com" },
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Discord", href: "https://discord.com" },
    ],
  },
} as const;
