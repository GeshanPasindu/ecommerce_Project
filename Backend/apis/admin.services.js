const database = require("../databse")

module.exports ={

    addcommission: async(data,callback) =>{
        database.query(
            `INSERT INTO commission (Category,Commission)
            values(?,?)`,
            [
                data.Category,
                data.Commission
            ],
            (err,results,fields) =>{
                if(err){
                    return callback(err)
                }
                return callback(null,results);

            }
        )


    },

    viewCommission: async(callback) =>{
        database.query(
            `SELECT * FROM commission `,
            [
            
            ],
            (err,results,fields) =>{
                if(err){
                    return callback(err)
                }
                return callback(null,results);

            }
        )


    },

    changeCommission: (data,callback) =>{
        database.query(
            `UPDATE commission SET commission = ? WHERE category = ?`,
            [
                data.Commission,
                data.Category
            ],
            (err,results,fields) =>{
                if(err){
                    return callback(err)
                }
                return callback(null,results);

            }
        )
    }
}