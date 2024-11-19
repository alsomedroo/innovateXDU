const express = require('express');
const multer = require('multer');
const { uploadDocument, getDocuments } = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post('/upload', authMiddleware, upload.single('document'), uploadDocument);
router.get('/documents', authMiddleware, getDocuments);

module.exports = router;
