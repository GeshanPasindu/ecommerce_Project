const router = require('express').Router();
const{createCommission} = require("./admin.controller");
 

router.post("/addCommission",createCommission);

module.exports = router;