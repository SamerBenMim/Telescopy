//entry point file  , env var / database config ...

const mongoose = require('mongoose')
const dotenv=require('dotenv'); // .env

//SHOULD BE ON THE TOP
//handle unhandled exception globally clg(x) x undifined

process.on('uncaughtException',err=>{
    console.log("unhandled Exception ,shutting down",err.name,err.message)
    console.log(err)
    if(server)
    server.close(()=>{
    process.exit(1); // we should terminate the app because instable state
   }) 
})

dotenv.config({path :'./config.env'})
const app= require("./app")  
const bp = require('body-parser')

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))





const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)
mongoose.connect(DB).then(() => {
    console.log("db connexion successful !!");
})

var server = app.listen(process.env.PORT||3000,()=>{
    console.log('app running on port '+ process.env.PORT);
});

//handle unhandled rejection globally wrong password bd
process.on('unhandledRejection',err =>{//subscribe to that event 'unhandledRejection'
    console.log('unhandled Rejection',err.name,err.message)
    server.close(()=>{
        process.exit(1); // 0 sucess -- 1 uncaught exception
       }) })
