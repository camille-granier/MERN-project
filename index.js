const express = require('express');
require('dotenv').config({path: './config/.env'})
require('./config/dbConfig.js');
//cookie-parser permet de lire body, req et cookies
const cookieParser = require('cookie-parser');
const { checkUser, requireAuth } = require('./middleware/auth.middleware');
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');
const app = express();
//package to provide middleware to enable access to data outside of given domain
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}
app.use(cors(corsOptions));

// jwt
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id)
});

//routes
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);


//server
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
 }
    )