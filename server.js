require('dotenv').config();
const colors = require('colors');
const router = require('./Routes/AuthRoute');
const role = require('./Routes/userRoute');

// const router = require('./Routes/authRoute')

const express = require('express');
const {errorHandler} = require('./Middlewares/errorMiddleware');
const connectDB = require('./Config/Db');
const app = express();
// const db = require('./config/Db');
// const db = require('./Config/Db');
connectDB();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/auth', router);
app.use('/api/user', role);
 



app.use(errorHandler)
const port = process.env.PORT || 8081;
app.listen(port, (err) => {
    if (!err) {
        console.log(`Listening on port ${port} is connected`)
    } else {
        console.log(err)
    }
});

