var express = require('express');
var router = express.Router();
const adminController = require("../controller/adminController")

router.post("/signup",adminController.signup)
router.get("/getUser",adminController.getUser)
router.get("/getSinleUser/:id",adminController.getSinleUser)
router.put("/updateUser/:id",adminController.updateUser)
router.delete("/deleteUser/:id",adminController.deleteUser)




module.exports = router;