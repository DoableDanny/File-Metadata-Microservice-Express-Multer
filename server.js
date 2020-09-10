const express = require('express');
const app = express();
const path = require('path');

// multer is a nodeJS middleware for handling form data
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  let responseObject = {};
  responseObject.name = req.file.originalname;
  responseObject.type = req.file.mimetype;
  responseObject.size = req.file.size;

  res.json(responseObject);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
