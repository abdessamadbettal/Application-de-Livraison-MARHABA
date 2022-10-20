const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}

module.exports = connectDB







// const dotenv = require('dotenv');
// dotenv.config({path: './config/config.env'});
// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useCreateIndex: true,
//             useFindAndModify: false,
//             useUnifiedTopology: true
//         });
//         console.log(`MongoDB Connected: ${conn.connection.host}`);
//     } catch (err) {
//         console.log(err);
//         process.exit(1);
//     }
// };
// module.exports = connectDB;

// // mongoose.connect('mongodb+srv://abdessamad:<azertyui>@firstapi.wjgnfv3.mongodb.net/libirary?retryWrites=true&w=majority')
// // .then(() => console.log('Connected to MongoDB...'))
// // .catch(err => console.error('Could not connect to MongoDB...'));
