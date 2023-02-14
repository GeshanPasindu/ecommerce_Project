const router = require('express').Router();
const{createCommission,
      updateCommission,
     getCommission} = require("./admin.controller");
 

router.post("/Addcommission",createCommission);
router.patch("/Updatecommission",updateCommission);
router.get("/Getcommission",getCommission);


module.exports = router;