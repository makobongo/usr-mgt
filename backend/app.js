const express = require('express');
const app = express();
const port = 3001;
var loginRouter = require('./routes/auth/login');
var registerRouter = require('./routes/auth/register');
var bodyParser = require('body-parser');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.use('/api/auth', loginRouter);
app.use('/api/auth', registerRouter);


// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${port}`);
});
