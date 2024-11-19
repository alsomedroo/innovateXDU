const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  document: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
});

const CourseModel = mongoose.model('Course', courseSchema);

module.exports = CourseModel;
