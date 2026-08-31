const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Root route to fix the "Cannot GET /" message
app.get('/', (req, res) => {
  res.json({ status: "success", message: "Once P2P Backend is running successfully!" });
});

const MONGO_URI = process.env.MONGO_URI || "";

mongoose.connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
