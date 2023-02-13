const {addcommission} = require("./admin.services");

module.exports ={

    createCommission: async(req,res) =>{
        const body = req.body;
        addcommission(body,(err,results) =>{

            if(err){
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

    }}

