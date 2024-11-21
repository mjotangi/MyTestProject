const express = require('express');
const app = express();
const port = 3000;

// Serve static files like HTML, CSS, JS
app.use(express.static('public'));

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, My server!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
