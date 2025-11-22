const express = require('express');
const app = express();
const port = 3001;
var authRouter = require('./routes/auth');

app.use('/api/auth/login', authRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
