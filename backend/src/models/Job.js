const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: [true, 'Company name is required'],
    trim: true
  },
  role: {
    type: String,
    required: [true, 'Role is required'],
    trim: true
  },
  status: {
    type: String,
    enum: ['Applied', 'Interview', 'Offer', 'Rejected'],
    default: 'Applied'
  },
  appliedDate: {
    type: Date,
    required: [true, 'Application date is required'],
    default: Date.now
  },
  link: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Job', jobSchema); 