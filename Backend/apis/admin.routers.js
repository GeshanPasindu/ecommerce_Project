const router = require('express').Router();
const{createCategory,
      updateCommission,
      getCommission,
      createCommission
                     } = require("./admin.controller");
 
router.post("/Addcategory",createCategory);
router.post("/Addcommission",createCommission);
router.patch("/Updatecommission",updateCommission);
router.get("/Getcommission",getCommission);


module.exports = router;