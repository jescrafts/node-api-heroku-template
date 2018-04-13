const express = require('express');
const app = express();

const keys = require('./config/keys');


require('./api/routes')(app);
app.get('/', (req,res) => {
    res.send("Key :: " +keys.sampleKey);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);