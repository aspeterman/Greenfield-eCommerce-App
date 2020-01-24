const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname + '/../client/dist')));


axios.get('http://52.26.193.201:3000/products/list')
  .then((something)=> console.log(something));




app.listen(PORT, console.log('Server is running on port 3000'));