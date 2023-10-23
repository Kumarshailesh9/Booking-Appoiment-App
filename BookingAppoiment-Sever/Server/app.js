const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const userRoute = require('./router/user-route');

app.use(bodyParser.json());
app.use(cors());

// Use the user routes
app.use(userRoute);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
