# Shopping Site - Frontend

A modern e-commerce shopping platform built with React and Vite. This application provides a complete shopping experience with user authentication, product browsing, cart management, and profile settings.

## 🚀 Features

- **User Authentication**

  - Sign up with password validation
  - Sign in with secure token-based authentication
  - Protected routes for authenticated users

- **Product Management**

  - Browse products with card-based layout
  - View detailed product information
  - Add products to cart

- **Shopping Cart**

  - Add/remove items from cart
  - Manage cart items

- **User Profile**

  - View and edit personal details
  - Manage shipping addresses
  - View order history
  - Account settings management

- **Modern UI/UX**
  - Responsive design with Ant Design components
  - Clean and intuitive interface
  - SCSS for custom styling

## 🛠️ Tech Stack

- **Framework**: React 18.2.0
- **Build Tool**: Vite 4.1.0
- **UI Library**: Ant Design 5.4.0
- **Routing**: React Router DOM 6.8.2
- **State Management**: Recoil 0.7.7
- **Data Fetching**: React Query 3.39.3
- **HTTP Client**: Axios 1.3.5
- **Styling**: SCSS
- **Date Handling**: Day.js 1.11.9
- **Icons**: Ant Design Icons 5.0.1

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## 🔧 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd fe-shopping-site
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:

```env
VITE_APP_API_BASE_URL=your_api_base_url
```

4. Start the development server:

```bash
npm run dev
```

The application will be available at `https://localhost:3000` (HTTPS enabled with mkcert).

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally

## 📁 Project Structure

```
src/
├── modules/           # Feature modules
│   ├── auth/         # Authentication module (sign-in, sign-up)
│   ├── home/         # Main shopping features
│   │   ├── components/  # Reusable components (cards, nav-bar, etc.)
│   │   ├── pages/      # Page components (cart, product, profile)
│   │   └── hooks/      # Custom hooks
│   ├── error/        # Error handling pages
│   └── shared/       # Shared components and utilities
├── services/         # API services and clients
├── store/            # Global state management (Recoil)
├── utils/            # Utility functions and constants
├── hooks/            # Global custom hooks
├── router.jsx        # Application routing configuration
└── App.jsx           # Root component
```

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APP_API_BASE_URL=your_backend_api_url
```

## 🎨 Styling

The project uses SCSS for styling with a modular approach:

- Shared styles in `src/modules/shared/styles/`
- Component-specific styles co-located with components
- Theme configuration in `src/utils/constants/theme.js`

## 🌐 Deployment

The application is deployed on Netlify:

[![Netlify Status](https://api.netlify.com/api/v1/badges/6e0242f4-1cdd-4631-b134-8c1761a4ffe3/deploy-status)](https://app.netlify.com/sites/rt-shopping-site/deploys)

## 🔑 Key Features Implementation

- **Authentication**: Token-based authentication with automatic token refresh
- **API Client**: Centralized API client with interceptors for error handling
- **Protected Routes**: Private routes for authenticated users only
- **State Management**: Recoil for global state, React Query for server state
- **Error Handling**: Centralized error handling with user-friendly messages

## 📝 Development Notes

- The project uses path aliases configured in `vite.config.js` for cleaner imports
- HTTPS is enabled in development using `vite-plugin-mkcert`
- React Query DevTools are available in development mode
- The application uses Ant Design's ConfigProvider for theme customization

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.
