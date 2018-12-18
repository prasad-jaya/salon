const mysql = require('mysql')

//ConfigDatabase Connection
function getconnection(){

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password:'',
        database: 'salon'
    })

    connection.connect(function (err){
        if(!err){
            console.log("Database Connected")
        }
        else{
            console.log("Error Database Connection")
        }
    })

    return connection
}

module.exports= getconnection();