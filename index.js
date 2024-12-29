const express = require('express');
const path = require('path'); // Required to handle file paths

const app = express();
const port = process.env.PORT || 3000; // Use environment port or default to 3000

// Serve static files (like CSS, JS) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file when someone visits the root route
app.get('/', (req, res) => {
  // Path to the index.html file in the same folder as index.js
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
