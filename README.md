# 🏢 Tiles Gallery - Architectural Excellence

**Tiles Gallery** is a premium web application designed for architects, interior designers, and homeowners to explore and curate a high-end collection of architectural tiles. From Italian marble to artisan ceramics, the platform offers a sophisticated interface for surface discovery.

## 🔗 Live Demo
[View Live Site](https://tiles-gallery-v1.vercel.app/) *(Placeholder)*  
**GitHub Repository:** [Md-Nur-A-Alam/Tiles_Gallery](https://github.com/Md-Nur-A-Alam/Tiles_Gallery)

---

## ✨ Key Features

*   **Premium Gallery UI**: A clean, architectural design system focusing on high-fidelity imagery and minimal typography.
*   **Secure Authentication**: Powered by **BetterAuth**, supporting:
    *   Traditional Email & Password login.
    *   Social Login with **Google** and **GitHub**.
*   **Architectural Details**: Deep-dive pages for every tile including:
    *   Technical specifications (Material, Finish, Dimensions).
    *   Usage and Maintenance guides.
    *   Multiple viewing angles.
*   **User Profiles**: Personalized dashboards for users to manage their details and curated collections.
*   **Responsive Excellence**: Fully optimized for Desktop, Tablet, and Mobile devices.
*   **Real-time Feedback**: Integrated `react-toastify` for seamless user interactions and error handling.

---

## 🛠️ Technology Stack

### Core
*   **Next.js 15 (App Router)**: Framework for high-performance server-side rendering and routing.
*   **React 19**: Modern UI library for interactive components.
*   **JavaScript**: Logic and state management.

### Authentication & Database
*   **BetterAuth**: High-security authentication solution with social provider support.
*   **MongoDB**: NoSQL database for session handling and user data storage.
*   **JSON Server**: Mock API for architectural product data.

### Styling & UI
*   **Tailwind CSS 4**: Modern utility-first styling.
*   **DaisyUI 5**: Premium UI component library.
*   **Lucide React & React Icons**: Sophisticated iconography.
*   **Geist Mono/Sans**: Clean, professional typography.

---

## 📦 Major NPM Packages Used

| Package | Purpose |
| :--- | :--- |
| `better-auth` | Comprehensive authentication system |
| `mongodb` | Database driver for session management |
| `lucide-react` | Architectural-style icons |
| `react-icons` | Social media and brand icons |
| `react-hook-form` | Efficient form management and validation |
| `react-toastify` | Stylish toast notifications |
| `daisyui` | Base component library |
| `json-server` | Development API for product data |

---

## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Md-Nur-A-Alam/Tiles_Gallery.git
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    Create a `.env` file and add the following:
    ```env
    BETTER_AUTH_SECRET=your_secret
    BETTER_AUTH_URL=http://localhost:3000
    AUTH_DB_URI=your_mongodb_uri
    GOOGLE_CLIENT_ID=your_google_id
    GOOGLE_CLIENT_SECRET=your_google_secret
    GITHUB_CLIENT_ID=your_github_id
    GITHUB_CLIENT_SECRET=your_github_secret
    ```

4.  **Run the development server:**
    ```bash
    # Start the JSON server (Product Data)
    npm run server

    # Start the Next.js app
    npm run dev
    ```

---

**Crafted with precision by Md. Nur A Alam.**  
*Dedicated to modern architectural design.*
