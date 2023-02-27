const database = require("../databse")

module.exports ={

    addcommission: async(data,callback) =>{
        database.query(
            `INSERT INTO commission (category,percentage)
            values(?,?)`,
            [
                data.category,
                data.percentage
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
            `UPDATE commission SET percentage = ? WHERE category = ?`,
            [
                data.percentage,
                data.category
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