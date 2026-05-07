# PROJECT_REPORT: Tiles Gallery Application Analysis

This report provides a comprehensive overview of the current state of the Tiles Gallery project, including its architecture, technology stack, authentication system, and known gaps.

---

## 1. Project Structure
The project follows the **Next.js App Router** architecture with a clear separation of concerns.

```text
b13-a8-tiles_gallery/
├── .env                    # Environment variables (DB URIs, Auth secrets)
├── db.json                 # JSON Server database (Tile data)
├── next.config.mjs         # Next.js configuration (API Rewrites)
├── package.json            # Dependencies and scripts
├── public/                 # Static assets
└── src/
    ├── app/                # App Router Routes
    │   ├── api/            # API Routes (BetterAuth endpoint)
    │   ├── auth/           # Authentication pages (signin, signup)
    │   ├── component/      # Reusable UI components
    │   ├── profile/        # User profile and update routes
    │   ├── tiles/          # All Tiles and Tile Details routes
    │   ├── globals.css     # Tailwind 4 & Global styles
    │   ├── layout.js       # Root layout (Navbar, Footer, Providers)
    │   ├── loading.js      # Root loading state
    │   ├── not-found.js    # Custom 404 page
    │   └── page.js         # Home page
    └── lib/                # Configuration & Utilities
        ├── auth.js         # BetterAuth server config
        └── auth-client.js  # BetterAuth client config
```

### App Router Conventions
- **Pages**: Defined via `page.js` or `page.jsx` in directory folders.
- **Layouts**: `layout.js` handles root wrapping (Navbar, Footer).
- **Loading**: `loading.js` implemented globally and for specific routes (e.g., `/tiles`).
- **Dynamic Routes**: `src/app/tiles/[tiledetails]` handles individual tile details.

---

## 2. Technology Stack
- **Next.js**: version `16.2.4` (App Router)
- **UI Library**: **Tailwind CSS v4** + **DaisyUI v5**
- **Authentication**: **BetterAuth** v1.6.9
  - **Adapter**: MongoDB Adapter (`@better-auth/mongo-adapter`)
  - **Providers**: Email/Password (Configured), Google (UI only, not configured)
- **Database**: **MongoDB** (Atlas) for authentication and **JSON Server** for tile data.
- **Other Packages**:
  - **JSON Server**: Port 5004 for tile data persistence.
  - **Animations**: `motion` (Framer Motion).
  - **Forms**: `react-hook-form` + `zod` + `@hookform/resolvers`.
  - **UI Icons**: `react-icons`, `lucide-react`, `FontAwesome`.
  - **Notifications**: `react-toastify`.
  - **Carousel**: `swiper`.

---

## 3. Authentication System (Current State)
### What is Working:
- **Registration**: Email/Password registration at `/auth/signup`.
- **Login**: Email/Password login at `/auth/signin`.
- **Session Handling**: Persistent sessions using BetterAuth cookies; accessible via `useSession()` in client components.
- **Sign Out**: Functioning sign-out mechanism in the Navbar.
- **Private Routes**: `PrivateRoute.jsx` wrapper implemented to protect sensitive pages.

### What is NOT yet implemented:
- **Google OAuth**: Button exists in UI but backend provider is not configured in `auth.js`.
- **Profile Update**: Route exists (`/profile/update`) and logic is implemented, but verification is needed for full functionality.

### BetterAuth Configuration:
- **Location**: `src/lib/auth.js` (Server) and `src/lib/auth-client.js` (Client).
- **Current Providers**: `emailAndPassword` (enabled: true).
- **Session Access**: Client-side via `useSession()`.

### Auth Routes:
- **Login**: `/auth/signin` (`src/app/auth/signin/page.jsx`)
- **Register**: `/auth/signup` (`src/app/auth/signup/page.jsx`)

---

## 4. Environment Variables
Defined in `.env`:
- `BETTER_AUTH_SECRET`: Secret for session encryption.
- `BETTER_AUTH_URL`: Base URL for authentication.
- `NEXT_PUBLIC_BETTER_AUTH_URL`: Publicly accessible auth URL.
- `AUTH_DB_URI`: MongoDB connection string for BetterAuth.
- `JSON_DB_URI`: Endpoint for tile data (JSON Server).

### Missing/Required for Google OAuth:
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`

---

## 5. Pages & Routes (Current State)

| Route | File Path | Access | Status |
| :--- | :--- | :--- | :--- |
| `/` (Home) | `src/app/page.js` | Public | Done |
| `/tiles` (All Tiles) | `src/app/tiles/page.jsx` | Public | Done |
| `/auth/signin` | `src/app/auth/signin/page.jsx` | Public | Done |
| `/auth/signup` | `src/app/auth/signup/page.jsx` | Public | Done |
| `/tiles/[tiledetails]` | `src/app/tiles/[tiledetails]/page.jsx` | Private | Done |
| `/profile` | `src/app/profile/page.jsx` | Private | Done |
| `/profile/update` | `src/app/profile/update/page.jsx` | Private | Done |

*Note: The assignment requested `/all-tiles`, but the current route is `/tiles`. User request listed `/tile/[id]`, currently mapped as `/tiles/[tiledetails]`.*

---

## 6. Components
Located in `src/app/component/`:
- **Navbar**: `Navbar/Navbar.jsx` (Implemented, includes session state).
- **Footer**: `Footer/Footer.jsx` (Implemented).
- **Banner**: Hero section for Home page.
- **FeatureTiles**: Display grid for featured products.
- **MovingText**: Decorative scrolling text.
- **tileCard**: Individual tile display component.
- **PrivateRoute**: Authentication guard component.

---

## 7. Data Layer
- **Auth Data**: Stored in MongoDB (Atlas) via BetterAuth.
- **Tile Data**: Stored in `db.json` and served via `json-server` on port 5004.
- **API Fetching**: Uses a Next.js `rewrite` in `next.config.mjs` to proxy `/api/proxy/*` to `http://localhost:5004/*`.
- **JSON Structure**:
  - `products`: Array of tile objects with `id`, `title`, `price`, `images`, `collection`, `material`, `dimensions`, etc.

---

## 8. UI & Design
- **Theme**: Dark theme set as default in root layout (`data-theme="dark"`).
- **Color Palette**: Warm architectural tones.
  - Primary: `#BC6C4D` (Terracotta)
  - Secondary: `#A15D3F` (Deep Brown)
  - Neutral: `#F4F1EE` (Light Beige)
- **Styling**: Tailwind CSS 4 with `@theme` block in `globals.css`.
- **Match to Mockup**: Highly consistent with the requested premium architectural aesthetic.

---

## 9. Known Issues / Gaps
- **Google Login**: The "Sign in with Google" button is non-functional as the provider is missing from the BetterAuth config.
- **Route Mismatch**: The project uses `/tiles` instead of the requested `/all-tiles`.
- **Environment Variables**: Missing Google credentials for production-ready OAuth.
- **Private Routes**: Verify if all intended pages are wrapped in `<PrivateRoute>`.

---

## 10. Summary
- **Fully Working**: Home page, Tile Collection, Tile Details, Email/Password Auth, Profile display, Responsive Layout.
- **Needs Building**: Google OAuth integration, refining Profile Update flow.
- **Implementation Order**:
  1. Add `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` to `.env`.
  2. Configure Google provider in `src/lib/auth.js`.
  3. Rename `/tiles` to `/all-tiles` to match assignment specs if strictly required.
  4. Final polish of the Profile Update form.
