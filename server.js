require('dotenv').config();
const router = require('./Routes/AuthRoute');
// const router = require('./Routes/authRoute')

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

// const express = require('express')
// const axios = require("axios")
// const app = express()

// const errorHandler = (error, request, response, next)=> {
//   // Error handling middleware functionality
//   console.log( `error ${error.message}`) // log the error
//   const status = error.status || 400
//   // send back an easily understandable error message to the caller
//   response.status(status).send(error.message)
// }

// app.get('/products', async (request, response) => {
//   try {
//     const apiResponse = await axios.get("http://localhost:3001/products")

//     const jsonResponse = apiResponse.data
    
//     response.send(jsonResponse)
//   } catch(error) {
//     next(error) // calling next error handling middleware
//   }

// })
// app.use(errorHandler)
// const port = process.env.PORT || 3001;
// app.listen(port, (err) => {
//     if (!err) {
//         console.log(`Listening on port ${port} is connected`)
//     } else {
//         console.log(err)
//     }
// });
