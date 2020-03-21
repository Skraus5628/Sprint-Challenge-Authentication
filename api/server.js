require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const cookieParser = require("cookie-parser")
const session = require('express-session');
const sessionStore = require('connect-session-knex')(session);

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const jokesRouter = require('../jokes/jokes-router.js');
const userRouter = require('../users/users-router');

const server = express();


const sessionOptions = {
    name: "ohno",
    secret: process.env.JWT_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 30,
        secure: false,
        httpOnly: true
    },
    resave: false,
    saveUninitialized: false,

    store: new sessionStore({
        knex: require('../database/dbConfig.js'),
        tablename: 'sessions',
        sidfieldname: 'sid',
        createtable: true,
        clearInterval: 1000 * 60 * 30
    })
};



server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(cookieParser())


server.use(session(sessionOptions));
server.use('/api/auth', authRouter);
server.use('/api/jokes', authenticate, jokesRouter);
server.use('/api/users', userRouter);

server.get("/",(req, res, next) => {
	res.json({
		message: "We're all mad here...",
	})
})


module.exports = server;