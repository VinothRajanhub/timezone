const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const cors = require('cors');

const timeroute = require('./routes/timeroute');


const PORT = 9000;

app.use(bodyParser.json());
app.use('/api',timeroute)
app.use(cors());


app.listen(PORT,() => {
    console.log("PORT Running at "+PORT);
})