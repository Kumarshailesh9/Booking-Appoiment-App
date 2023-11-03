const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const router = require('./routes/expenseroute');
app.use(bodyParser.json());
app.use(cors());

app.use(router)

app.listen(3000);

