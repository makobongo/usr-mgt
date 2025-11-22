const express = require('express');
const app = express();
const port = 3001;
var loginRouter = require('./routes/auth/login');
var registerRouter = require('./routes/auth/register');

app.use('/api/auth', loginRouter);
app.use('/api/auth', registerRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
