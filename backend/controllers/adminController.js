const CourseModel = require('../models/courseModel');
const path = require('path');
const fs = require('fs');

const uploadDocument = async (req, res) => {
  const { title } = req.body;

  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const documentPath = `/uploads/${req.file.filename}`;

  try {
    const course = new CourseModel({ title, document: documentPath });
    await course.save();

    res.status(201).json({ message: 'Document uploaded successfully', course });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading document', error });
  }
};

const getDocuments = async (req, res) => {
  try {
    const courses = await CourseModel.find();
    res.status(200).json({ courses });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching documents', error });
  }
};

module.exports = { uploadDocument, getDocuments };
