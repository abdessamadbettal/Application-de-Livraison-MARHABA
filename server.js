require('dotenv').config();
const router = require('./Routers/AuthRoute');

const express = require('express');
const app = express();

app.use(express.json())
app.use('/api/auth', router);

const port = process.env.PORT || 8081;
app.listen(port, (err) => {
    if (!err) {
        console.log(`Listening on port ${port} is connected`)
    } else {
        console.log(err)
    }
});