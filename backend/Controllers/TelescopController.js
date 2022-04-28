const Telescop = require("../Models/TelescopModel")
const catchAsync = require("./../Utils/catchAsync")
const AppError = require("../Utils/appError")
const APIFeatures = require("../Utils/ApiFeatures")
/* HTTP Methods pour un Restful Api*/ 

//CREATE (methode Post)
exports.addTelescop =  catchAsync( async(req,res,next)=>{
 const newTelescop = await Telescop.create(req.body);
 res.status(200).json({
     status :'success',
     telescop : newTelescop,
 })
})
//READ (methode Get)
exports.getAllTelescops = catchAsync(async (req,res,next)=>{
    const features = new APIFeatures(Telescop.find({deleted:false}),req.query)
    .sort()
    .filter()
    .paginate()

    const telescops = await features.query
    res.status(200).json({
        status :'success',
        results: telescops.length,
        data:{
         telescops
        }
})
})

exports.getTelescopById =catchAsync( async (req,res,next)=>{ 
      const telescop = await Telescop.findOne({deleted:false,_id:req.params.id })
      console.log(telescop)
      if(!telescop) return next(new AppError('no telescop found with that ID',404))
      res.status(200).json(
            {status :'success', 
            data:telescop
        })
    }
)
//UPDATE (methode Patch)
exports.updateTelescop = catchAsync(async (req,res,next)=>{
    var updatedTelescop = await Telescop.findOneAndUpdate( {_id:req.params.id , deleted:false} ,req.body, { new: true, runValidators: true }) //new return the updated obj 
    if(!updatedTelescop) return next(new AppError('no document found with that ID',404))

    res.status(200).json({
        status :'success',
        data:updatedTelescop
        
})
})


//DELETE (methode Delete)
/* Soft delete*/ 
exports.Soft_deleteTelescop = catchAsync(async (req,res,next)=>{
    var deletedTelescop = await Telescop.findOneAndUpdate( {_id:req.params.id , deleted:false} ,{deleted:true}, { new: true, runValidators: true }) //new return the updated obj 
    if(!deletedTelescop) return next(new AppError('no document found with that ID',404))

    res.status(200).json({
        status :'success',
        data:null
        
})
})
/* Hard delete*/ 
exports.Hard_deleteTelescop =catchAsync( async (req,res,next)=>{ 
      const telescop = await Telescop.findByIdAndDelete(req.params.id)
      if(!telescop) return next(new AppError('no document found with that ID',404))
      res.status(204).json(
            {status :'success', 
            data:null
        })
    }
)
