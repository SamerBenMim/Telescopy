const express = require("express")
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')
const app = express(); 
const morgan = require('morgan')
const globalErrorHandler = require("./Middlware/ErrorHandler")
const TelescopRouter = require('./Routes/TelescopRoute')
const cors = require('cors');


    // app.use(helmet())
    // app.use(morgan('dev'))
    // app.use(express.json({ limit:'10kb'}))   
    // app.use(mongoSanitize()) 
    // app.use(xss()) 
    app.use(cors) 
    app.use('/api/telescops',TelescopRouter)

    app.all('*',(req,res,next)=>{ 
        const err = new Error(`can't find ${req.originalUrl}`)
        err.status='fail';
        err.statusCode= 404;
        next(err); 
    })
        
    app.use(globalErrorHandler)

    module.exports = app;


    
