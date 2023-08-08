const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");

router.post("/index", controller.index);


module.exports = router;