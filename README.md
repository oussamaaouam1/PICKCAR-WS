# PickCar - Car Rental Platform

PickCar is a modern car rental platform that connects car managers/owners with renters, providing a seamless experience for vehicle rentals.

## 🚀 Features

### For Renters
- Browse available cars with detailed information
- Search cars by location using MapBox integration
- Filter cars by price, type, features, etc.
- Submit rental applications
- Track application status
- View current and past rentals
- Manage favorite cars
- Update profile settings

### For Managers
- List cars for rent with detailed specifications
- Upload multiple car images (stored in AWS S3)
- Manage rental applications
- Track reservations and payments
- View car location on interactive map
- Update business profile settings

### General Features
- Authentication with AWS Cognito (Email/Password and Google OAuth)
- Role-based access control (Manager/Renter)
- Interactive maps for car locations
- Real-time updates
- Responsive design

## 🛠️ Technology Stack

### Frontend (Next.js)
- Next.js 15.2 with App Router
- TypeScript for type safety
- Redux Toolkit for state management
- RTK Query for API integration
- AWS Amplify for authentication
- MapBox for maps and geocoding
- Tailwind CSS for styling
- shadcn/ui components
- Framer Motion for animations

### Backend (Express + Prisma)
- Node.js with Express
- TypeScript
- Prisma as ORM
- PostgreSQL database with PostGIS
- AWS S3 for image storage
- JWT authentication middleware
- RESTful API architecture

### Cloud Services
- AWS Cognito for auth
- AWS S3 for file storage
- MapBox for geolocation
- PostgreSQL with PostGIS extension

## 📁 Project Structure

### Frontend
```
pickcar-client/
├── src/
│   ├── app/                 # Next.js app router pages
│   ├── components/          # Reusable components
│   ├── lib/                 # Utilities and constants
│   ├── state/              # Redux store and API slices
│   └── types/              # TypeScript type definitions
```

### Backend
```
pickcar-server/
├── src/
│   ├── controllers/        # Route controllers
│   ├── middleware/        # Express middlewares
│   ├── routes/           # API routes
│   └── index.ts          # Server entry point
├── prisma/
│   ├── schema.prisma     # Database schema
│   └── migrations/       # Database migrations
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- PostgreSQL with PostGIS extension
- AWS account with Cognito and S3 configured
- MapBox API key

### Environment Variables

#### Frontend (.env)
```env
NEXT_PUBLIC_API_BASE_URL=
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=
NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID=
NEXT_PUBLIC_AWS_COGNITO_USER_POOL_CLIENT_ID=
NEXT_PUBLIC_AWS_COGNITO_DOMAIN=
```

#### Backend (.env)
```env
DATABASE_URL=
AWS_REGION=
AWS_S3_BUCKET_NAME=
```

### Installation & Setup

1. Clone the repository
```bash
git clone https://your-repository-url.git
cd pickcar
```

2. Install dependencies
```bash
# Frontend
cd pickcar-client
npm install

# Backend
cd pickcar-server
npm install
```

3. Run database migrations
```bash
cd pickcar-server
npx prisma migrate dev
```

4. Start development servers
```bash
# Frontend
cd pickcar-client
npm run dev

# Backend
cd pickcar-server
npm run dev
```

## 🔐 Authentication Flow

1. Users can sign up/in using email/password or Google OAuth
2. AWS Cognito handles authentication and provides JWT tokens
3. Backend validates tokens using middleware
4. Role-based access control for managers and renters

## 📝 API Documentation

### Cars
- `GET /cars` - List all cars with filters
- `GET /cars/:id` - Get car details
- `POST /cars` - Create new car listing
- `DELETE /cars/:id` - Delete car listing

### Applications
- `GET /applications` - List applications
- `POST /applications` - Submit new application
- `PUT /applications/:id/status` - Update application status

### Reservations
- `GET /reservations` - List reservations
- `GET /reservations/:id/payments` - Get reservation payments

## 🤝 Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.



