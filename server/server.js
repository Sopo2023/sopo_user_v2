const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors'); // CORS 패키지 추가

const app = express();
const port = 3001;

// Define the uploads directory
const uploadsDir = path.join(__dirname, 'uploads');

// Create the uploads directory if it doesn't exist
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
    console.log('Uploads directory created');
}

// Use CORS middleware
app.use(cors()); // CORS 설정

// Set up multer for file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(`Uploading file to: ${uploadsDir}`);
        cb(null, uploadsDir); // Use absolute path for uploads directory
    },
    filename: (req, file, cb) => {
        console.log(`Filename: ${Date.now() + path.extname(file.originalname)}`);
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(uploadsDir));

// Basic route to test server
app.get('/', (req, res) => {
    res.send('Hello World!'); // or you can serve an HTML file here
});

// Route for file upload
app.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    res.json({ url: fileUrl });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});