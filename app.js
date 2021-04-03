const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const route = require('./bookRoutes');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api', route);

mongoose.connect('mongodb://localhost:27017/crud', {useNewUrlParser : true, useUnifiedTopology : true})
    .then( () => console.log('Database is connected successfully'))
    .catch( () => console.log('Check your DB'));


app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
})
