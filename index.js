const express = require('express');
const path = require('path');

const app = express();

console.log("Starting server initialization...");

// Serve all static files from root directory
app.use(express.static(path.join(__dirname)));

// Explicit route for root URL
app.get('/', (req, res) => {
  console.log("Root route '/' was successfully hit!");
  res.sendFile(path.join(__dirname, 'index.html'), (err) => {
    if (err) {
      console.error("Failed to send index.html:", err);
      res.status(500).send("File error: " + err.message);
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running live on port ${PORT}`);
});
