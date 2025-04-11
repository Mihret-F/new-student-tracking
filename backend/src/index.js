const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

// CORS Configuration
const corsOptions = {
  origin: 'https://student-job-tracker-frontend-nine.vercel.app',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan('dev'));

// MongoDB Connection with retry logic
const mongooseRetry = async (retryCount = 0) => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    if (retryCount < 5) {
      console.log(`Retrying connection attempt ${retryCount + 1}...`);
      setTimeout(() => mongooseRetry(retryCount + 1), 5000);
    } else {
      console.error('Exceeded retry attempts. Could not connect to MongoDB.');
      process.exit(1);
    }
  }
};

mongooseRetry();

// MongoDB connection events
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected from MongoDB');
});

// Routes
app.use('/api/jobs', require('./routes/jobRoutes'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('Server is shutting down...');
  await mongoose.disconnect();
  process.exit(0);
});

// Catch unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled promise rejection:', err);
  mongoose.disconnect();
  process.exit(1);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
