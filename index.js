const express = require('express');
require('dotenv').config({path: './config/.env'})
require('./config/dbConfig.js');
//cookie-parser permet de lire body, req et cookies
const cookieParser = require('cookie-parser');
const { checkUser, requireAuth } = require('./middleware/auth.middleware');
const userRoutes = require('./routes/user.routes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// jwt
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id)
});

//routes
app.use('/api/user', userRoutes);


//server
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
 }
    )