const {addCategory,
      changeCommission,
      viewCommission,
      addCommission} = require("./admin.services");

module.exports ={

    createCategory: async(req,res) =>{
        const body = req.body;
        // console.log(req.body)
        addCategory(body,(err,results) =>{

            if(err){
                console.log(err);
                return res.json({
                    success:0,
                    message: err
                });
            }
            return res.json({
                success: 1,
                message: results
            })
        })

    },

    createCommission: async(req,res) =>{
        const body = req.body;
        // console.log(req.body)
        addCommission(body,(err,results) =>{

            if(err){
                console.log(err);
                return res.json({
                    success:0,
                    message: err
                });
            }
            return res.json({
                success: 1,
                message: results
            })
        })

    },

    getCommission: async(req,res) =>{
        
        viewCommission((err,results) =>{

            if(err){
                console.log(err);
                return res.json({
                    success:0,
                    message: err
                });
            }
            if(!results){
                return res.json({
                    success: 0,
                    Message: "Commission not found. database error "

                })
            }
            return res.json({
                success: 1,
                message: results
            });
        });

    },

    updateCommission: async(req,res) =>{
        const body = req.body;
        changeCommission(body,(err,results) =>{

            if(err){
                console.log(err);
                return res.json({
                    success:0,
                    message: err
                });
            }
            return res.json({
                success: 1,
                message: results
            })
        })

    },
}

