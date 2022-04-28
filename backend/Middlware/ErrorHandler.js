
const sendErrorDev= (err,res)=>{
    res.status(err.statusCode).json({
        status:err.status,
        message:err.message,
        error:err,
        stack:err.stack
       })
}


module.exports = (err,req ,res ,next)=>{ // error handling middleware avec 4 parametres
    err.statusCode = err.statusCode || 500 ;
    err.status=err.status||"error";
    sendErrorDev(err,res)   
}

