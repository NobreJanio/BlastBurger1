# BlastBurger

<p align="center">
  <img src="./Frontend-BlastBurger/src/assets/logo.svg" alt="BlastBurger Logo" width="200"/>
</p>

## Project Description

BlastBurger is a full-stack e-commerce application for a burger restaurant, allowing customers to browse menu items, add products to cart, and complete orders with online payment processing. The platform includes user authentication, product management, and order tracking functionality.

## Technologies Used

### Backend
- **Node.js** - JavaScript runtime environment
- **Express** - Web application framework
- **Sequelize** - ORM for database management
- **PostgreSQL** - Relational database
- **MongoDB** - NoSQL database for order management
- **JWT** - Authentication and authorization
- **Multer** - File upload handling
- **Stripe** - Payment processing integration
- **Yup** - Schema validation

### Frontend
- **React** - JavaScript library for building user interfaces
- **Vite** - Next generation frontend tooling
- **React Router** - Navigation and routing
- **Styled Components** - Component-level styling
- **React Hook Form** - Form handling
- **Axios** - HTTP client
- **React Toastify** - Toast notifications
- **Stripe JS** - Payment processing on client side
- **Firebase** - Hosting and deployment

## Features

- **User Authentication** - Register, login, and user session management
- **Product Browsing** - View products by categories with images and descriptions
- **Shopping Cart** - Add, remove, and update quantities of products
- **Order Management** - Create and track orders
- **Admin Dashboard** - Manage products, categories, and orders (admin only)
- **Responsive Design** - Mobile-friendly interface
- **Payment Processing** - Secure checkout with Stripe integration
- **Image Upload** - Product and category image management

## Project Structure

```
├── Backend-BlastBurger/     # Node.js API
│   ├── src/                # Source code
│   │   ├── app/           # Application logic
│   │   │   ├── controllers/ # Request handlers
│   │   │   ├── middleware/ # Authentication middleware
│   │   │   ├── models/    # Database models
│   │   │   └── schemas/   # MongoDB schemas
│   │   ├── config/        # Configuration files
│   │   ├── database/      # Database setup
│   │   ├── app.js         # Express application
│   │   ├── routes.js      # API routes
│   │   └── server.js      # Server entry point
│   └── uploads/           # Uploaded files
└── Frontend-BlastBurger/   # React application
    ├── src/               # Source code
    │   ├── assets/        # Static assets
    │   ├── components/    # Reusable components
    │   ├── containers/    # Page components
    │   ├── hooks/         # Custom React hooks
    │   ├── routes/        # Application routes
    │   ├── services/      # API services
    │   ├── styles/        # Global styles
    │   └── utils/         # Utility functions
    └── public/            # Public assets
```

## Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- PostgreSQL database
- MongoDB database
- Stripe account for payment processing

### Backend Setup

1. Clone the repository
2. Navigate to the backend directory:
   ```
   cd Backend-BlastBurger
   ```
3. Install dependencies:
   ```
   yarn install
   ```
4. Create a `.env` file with the following variables:
   ```
   DB_HOST=localhost
   DB_USER=postgres
   DB_PASS=yourpassword
   DB_NAME=blastburger
   PORT=3001
   TOKEN_SECRET=yoursecretkey
   MONGO_URL=mongodb://localhost:27017/blastburger
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```
5. Run database migrations:
   ```
   npx sequelize db:migrate
   ```
6. Start the development server:
   ```
   yarn dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd Frontend-BlastBurger
   ```
2. Install dependencies:
   ```
   yarn install
   ```
3. Create a `.env` file with the following variables:
   ```
   VITE_API_BASE_URL=http://localhost:3001
   VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
   ```
4. Start the development server:
   ```
   yarn dev
   ```

## Deployment

The frontend application is configured for deployment to Firebase Hosting. The backend can be deployed to any Node.js hosting service like Heroku, AWS, or DigitalOcean.

## Author

- **Jânio Júnior** - [GitHub](http://github.com/nobrejanio)

## License

This project is licensed under the ISC License.