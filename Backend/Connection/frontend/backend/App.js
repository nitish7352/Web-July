const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());

app.use(cors()); // Enable CORS so frontend and backend can use different ports

// Example 1: Login
app.post('/login', (req, res) => {

  // Data from Frontend - req.body
  const { name, email } = req.body;

  console.log(name);

  // Simple Validation
  if (name && email) {
    res.json({
      message: `Welcome ${name} To Amazon`
    });
  } else {
    res.json({
      message: 'Email and Name are required'
    });
  }
});

// Home Route
app.get('/', (req, res) => {
  res.json({
    message: 'Backend Running'
  });
});

// Start Server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
