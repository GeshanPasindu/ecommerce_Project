const database = require("../databse")

module.exports ={

    addcommission: (data,callback) =>{
        database.query(
            `INSERT IN TO commission (Category,Commission)
            values(?,?)`,
            [
                data.Category,
                data.Commission
            ],
            (err,results,fields) =>{
                if(err){
                    return callback(err)
                }
                return callback(results);

            }
        )


    }
}