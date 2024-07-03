const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"  // เพิ่ม database ที่ต้องการใช้งาน (ถ้ามี)
  });
con.connect(function(err) {

    if (err) throw err;

    console.log("Connected!");



     var sql = "SELECT * FROM Customers WHERE address = 'Highway 37'";



    con.query(sql, function (err, result, fields) {

          if (err) throw err; 

          console.log(result);

    });

});