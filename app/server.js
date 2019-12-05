const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

require('./routes/routes')(app);

const server = app.listen(3000,()=>{
    console.log(`Server started on ${server.address().address}:${server.address().port}`)
});