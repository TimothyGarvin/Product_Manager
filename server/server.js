require('dotenv').config();
require('./config/mongoose.config')
const express = require('express');
const cors = require('cors')
const app = express();
const port = 8000
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extend: true}));
require('./routes/product.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );