# Student Job Tracker

A full-stack web application for tracking job applications, built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Features

- Add new job applications with company details, role, status, and application date
- View and filter job applications
- Update application status
- Delete job applications
- Responsive and modern UI

## Tech Stack

### Frontend
- React.js with Hooks
- Material-UI for components
- React Router for navigation
- Axios for API calls
- Date-fns for date manipulation

### Backend
- Node.js
- Express.js
- MongoDB (MongoDB Atlas)
- Mongoose ODM

## Project Structure

```
student-job-tracker/
├── frontend/                 # React frontend
│   ├── public/
│   │   └── README.md
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React context for state management
│   │   ├── services/       # API service functions
│   │   ├── utils/          # Utility functions
│   │   ├── hooks/          # Custom React hooks
│   │   └── styles/         # CSS/SCSS files
│   ├── package.json
│   └── README.md
├── backend/                 # Node.js/Express backend
│   ├── src/
│   │   ├── controllers/    # Route controllers
│   │   ├── models/         # MongoDB models
│   │   ├── routes/         # API routes
│   │   ├── middleware/     # Custom middleware
│   │   ├── config/         # Configuration files
│   │   └── utils/          # Utility functions
│   ├── package.json
│   └── README.md
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- npm or yarn

### Installation

1. Clone the repository
2. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```
3. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```
4. Create a `.env` file in the backend directory with your MongoDB connection string
5. Start the development servers:
   - Frontend: `cd frontend && npm run dev`
   - Backend: `cd backend && npm run dev`

## Deployment

- Frontend: Deployed on Vercel
- Backend: Deployed on Render/Railway
- Database: MongoDB Atlas

## License

MIT 