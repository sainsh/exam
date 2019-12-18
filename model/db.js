var mysql = require('mysql');
var host = 'localhost', user = "root", psw = "password", db = "hjemlose", table = "resurser";

var connection = mysql.createConnection({
    host: host,
    user: user,
    password: psw,
    database: db
})


var getData = (id) => {

    let sql = `SELECT * FROM ${table} ${(id) ? "": `WHERE id = ${id}`}`;

    return new Promise((resolve, reject) => {
        connection.query(sql, (err,res,fields) => {
            
        })
    })


}

var insertData = (body) => {

    return new Promise((resolve, reject) => {
        connection.query(`SELECT id FROM kategorier WHERE navn = "${body.kategori}"`, (err, res, fields) => {
            if (err){ 
                reject(err)
                throw err;}
            var kategori = res[0].id; //sets the kategori as it's id instead of name

            let sql = `INSERT INTO ${table} values(0,"${body.by}",${kategori},"${body.navn}","${body.beskrivelse}","${body.adresse}",${body.telefon},"${body.åbningstider}","${(body.website) ? body.website : null}")`
            connection.query(sql, (err, res, fields) => {
                if (err){ 
                    reject(err)
                    throw err;}
                
                resolve(body)
            });
        });

    })
}

var updateData = () => {

}

var deleteData = () => {

}

module.exports.getData = getData;
module.exports.insertData = insertData;
module.exports.updateData = updateData;
module.exports.deleteData = deleteData;