// index.js

// Import required modules
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to handle JSON and URL encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route for the home page
app.get('/', (req, res) => {
  res.send('Hello, welcome to the Express app!');
});

// Example of a simple API endpoint
app.get('/api/data', (req, res) => {
  res.json({ message: 'This is some data from the API.' });
});

// Example of a POST API endpoint
app.post('/api/data', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Data received: ${name}` });
});

// Catch-all 404 handler for undefined routes
app.use((req, res, next) => {
  res.status(404).send('Sorry, we could not find that resource!');
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
