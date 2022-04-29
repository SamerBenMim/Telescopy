const express = require("express")
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')
const app = express(); 
// const morgan = require('morgan')
const globalErrorHandler = require("./Middlware/ErrorHandler")
const cors = require('cors');
const TelescopRouter = require('./Routes/TelescopRoute')
app.use(cors())


    app.use(helmet())
    app.use(express.json({ limit:'10kb'}))   
    app.use(mongoSanitize()) 
    app.use(xss()) 
    app.use((req,res,next)=>{
        res.header('Access-Control-Allow-Origin',"*")
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
        res.header("Access-Control-Allow-Methods", "*") 
        res.header("Cache-Control: no-cache") 
        next()
    }) 
    app.use('/api/telescops',TelescopRouter)

    app.all('*',(req,res,next)=>{ 
        const err = new Error(`can't find ${req.originalUrl}`)
        err.status='fail';
        err.statusCode= 404;
        next(err); 
    })
        
    app.use(globalErrorHandler)

    module.exports = app;


    
