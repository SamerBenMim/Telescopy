const express = require("express")
const router = express.Router();
const {getAllTelescops,addTelescop, Soft_deleteTelescop,getTelescopById,updateTelescop} = require('../Controllers/TelescopController')

router 
  .route("/")
  .post(addTelescop)
  .get(getAllTelescops)

router 
  .route("/:id")
  .get(getTelescopById)
  .patch(updateTelescop)
  .delete(Soft_deleteTelescop)

module.exports = router;