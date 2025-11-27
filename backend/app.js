const express = require('express');
const app = express();
const port = 3001;
var loginRouter = require('./routes/auth/login');
var registerRouter = require('./routes/auth/register');
var profileRouter = require('./routes/profile');
var bodyParser = require('body-parser');
const cors = require('cors');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Enable CORS for all origins
app.use(cors());

// Enable CORS for specific origins
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,POST,PUT,DELETE',  // Allowed HTTP methods
  allowedHeaders: 'Content-Type,Authorization',  // Allowed headers
  credentials: true, // Allow cookies or credentials
  preflightContinue: false, // Pass preflight response to the next handler
  optionsSuccessStatus: 204, // Success status code for OPTIONS requests
}));

app.use('/api/auth', loginRouter);
app.use('/api/auth', registerRouter);
app.use('/api/auth', profileRouter);


// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${port}`);
});
