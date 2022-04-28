
// Assure la gestion de exception , code plus lisible , plus clair , pas de try ,catch , finally 
module.exports   = fn =>{
    return (req,res,next)=>{
    fn(req,res,next).catch(next) ;
    }
}