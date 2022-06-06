const express = require('express');
require('dotenv').config({path: './config/.env'})
require('./config/dbConfig.js');
const userRoutes = require('./routes/user.routes');
const app = express();

//routes
app.use('/api/user', userRoutes)


//server
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
 }
    )