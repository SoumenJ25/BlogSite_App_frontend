BlogSite – Frontend Application

This is the frontend application for the BlogSite platform, built using React 18.
It provides a clean UI for public blog discovery, user authentication, and user dashboard management.

The frontend communicates with backend services via an API Gateway and uses JWT-based authentication.

**Tech Stack**
* React 19
* React Router v6
* Material UI (MUI)
* Axios
* Context API + useReducer
* CSS (component-level styles)
* JWT Authentication

**Project Structure**
src/
 ├── api/
      ├── axios.jsx
 ├── components/
 │    ├── layout/
 │    │    ├── Header.jsx
           ├── Layout.jsx.jsx
 │    │    └── Footer.jsx
       ├── HomePageSection/
 │    │
 │    ├── blogs/
 │    │    ├── BlogCard.jsx
 │    │    ├── BlogList.jsx
 │    │    ├── BlogFilters.jsx
 │    │    └── BlogModal.jsx
 │    │
 │    └── dashboard/
 │         ├── DashboardHeader.jsx
 │         ├── DashboardContent.jsx
 │         └── EmptyState.jsx
 │
 ├── pages/
 │    ├── Home.jsx
 │    ├── Login.jsx
 │    ├── Registration.jsx
 │    ├── PublicBlogsPage.jsx
 │    ├── UserDashboardPage.jsx
 │    └── CreateBlogPage.jsx
 │
 ├── context/
 │    └── AuthContext.jsx
 │
 ├── services/
 │    └── axiosInstance.js
 │
 │
 ├── App.jsx
 └── index.js

 **Features Implemented**
* **Public (No Login Required)**
- Landing page with hero section and feature cards
- Public blogs listing
- Category and date-based blog filtering
- Blog detail modal

**Authentication**

* User Registration with validations
* User Login
* JWT-based authentication
* Token stored in sessionStorage
* Automatic logout on token expiry (401 handling via Axios interceptor)

** Authenticated User**

* User Dashboard (My Blogs)
* View user’s blogs
* Create new blog
* Delete blog (ownership enforced)
* Empty state UI when no blogs exist

** Authentication Flow**
* JWT token is received on successful login
* Token is stored in sessionStorage
* Axios interceptor automatically attaches token to requests
* On 401 Unauthorized (token expired):

**User is logged out**
* Redirected to Login page

** API Integration**
* All API calls are made via a centralized Axios instance:
* Base URL configured for API Gateway
* Authorization header injected automatically
* Global error handling via interceptors

**Backend runs on a different port → CORS is handled at API Gateway / backend level**

**Validation (Client-side)**

Registration form validates:

All fields are mandatory

Valid email format

Password must be alphanumeric

Password & Confirm Password must match

Backend validations still exist and act as the source of truth.

** Styling**

Material UI components used for layout and base styling

Custom CSS files used for:

Layout spacing

Colors

Responsive tweaks

No inline styles used

**Running the Application**
1. Install dependencies
npm install

2. Start the app
npm start


The app will run at:

http://localhost:3000

** Environment Assumptions**

Backend API Gateway running on http://localhost:4000

APIs are already configured and available

JWT authentication enabled on protected routes
