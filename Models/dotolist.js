const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({

  // User Details
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  // Task Details
  title: {
    type: String,
    required: true,
    trim: true
  },

  description: {
    type: String,
    default: ""
  },

  // Category
  category: {
    type: String,
    enum: [
      "Personal",
      "Work",
      "Study",
      "Office",
      "College",
      "Health",
      "Shopping",
      "Finance",
      "Travel",
      "Fitness",
      "Family",
      "Others"
    ],
    default: "Personal"
  },

  // Priority
  priority: {
    type: String,
    enum: ["Low", "Medium", "High", "Urgent"],
    default: "Medium"
  },

  // Status
  status: {
    type: String,
    enum: [
      "Pending",
      "In Progress",
      "Completed",
      "Cancelled",
      "On Hold"
    ],
    default: "Pending"
  },

  isCompleted: {
    type: Boolean,
    default: false
  },

  progress: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  },

  // Dates
  dueDate: {
    type: Date
  },

  dueTime: {
    type: String
  },

  startDate: {
    type: Date
  },

  completedAt: {
    type: Date
  },

  // Reminder
  reminder: {
    type: Boolean,
    default: false
  },

  reminderDate: {
    type: Date
  },

  // Repeat Task
  repeat: {
    type: String,
    enum: [
      "None",
      "Daily",
      "Weekly",
      "Monthly",
      "Yearly"
    ],
    default: "None"
  },

  // Estimated Time
  estimatedHours: {
    type: Number,
    default: 0
  },

  estimatedMinutes: {
    type: Number,
    default: 0
  },

  // Actual Time
  actualHours: {
    type: Number,
    default: 0
  },

  actualMinutes: {
    type: Number,
    default: 0
  },

  // Labels
  tags: [{
    type: String
  }],

  // Checklist
  checklist: [
    {
      title: String,
      completed: {
        type: Boolean,
        default: false
      }
    }
  ],

  // Notes
  notes: {
    type: String
  },

  // Attachments
  attachments: [
    {
      fileName: String,
      fileUrl: String
    }
  ],

  // Location
  location: {
    type: String
  },

  // Task Color
  color: {
    type: String,
    default: "#3B82F6"
  },

  // Important
  isImportant: {
    type: Boolean,
    default: false
  },

  // Favourite
  isFavourite: {
    type: Boolean,
    default: false
  },

  // Archive
  isArchived: {
    type: Boolean,
    default: false
  },

  // Soft Delete
  isDeleted: {
    type: Boolean,
    default: false
  },

  // Created By
  createdBy: {
    type: String
  },

  // Updated By
  updatedBy: {
    type: String
  }

},
{
  timestamps: true
});

module.exports = mongoose.model("Todo", todoSchema);