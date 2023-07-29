import path from 'path';
import express from 'express';
import multer from 'multer';

const router = express.Router();

// Create storage engine
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFileType(file, cb) {
  // Allowed file types
  const fileTypes = /jpg|jpeg|png/;
  // Check extension
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime type
  const mimetype = fileTypes.test(file.mimetype);
  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Images only!');
  }
}

const upload = multer({
  storage,
});

router.post('/', upload.single('image'), (req, res) => {
  res.send({
    message: 'Image Uploaded',
    image: `/${req.file.path}`,
  });
});

export default router;
