const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer();

app.post('/test', upload.single('csvFile'), async (req, res) => {
  try {
    const csvFile = req.file.buffer.toString();
    const rows = csvFile.split('\n');

    for (let row of rows) {
      const columns = row.replace(/"/g, '').split(',');
      console.log(columns);
    }

    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

app.listen(3000, function() {
  console.log(`Server started at ${new Date().toString()}`);
});
