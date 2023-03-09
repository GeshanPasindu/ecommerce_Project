const database = require("../databse")

module.exports ={
    addCategory: async(data,callback) =>{
        database.query(
            `INSERT INTO user_category (category_name)
            values(?)`,
            [
                data.category_name,
            ],
            (err,results,fields) =>{
                if(err){
                    return callback(err)
                }
                return callback(null,results);
            }
        )
    },
    addCommission: async(data,callback) =>{
        database.query(
            `INSERT INTO commission (commission_rate,category_id)
            values(?,?)`,
            [
                data.commission_rate,
                data.category_id
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
            `SELECT * 
            FROM commission AS c RIGHT JOIN user_category AS u  ON c.category_id = u.category_id `,
            
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
            `UPDATE commission SET commission_rate = ? WHERE  commission_id=?`,
            [
                data.commision_rate,
                data.commission_id,
                
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