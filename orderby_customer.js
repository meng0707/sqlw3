const mysql = require('mysql');

// กำหนดการเชื่อมต่อ MySQL
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"  // เพิ่ม database ที่ต้องการใช้งาน (ถ้ามี)
});
con.connect(function(err) {

    if (err) throw err;

    console.log("Connected!");



     var sql = "SELECT * FROM Customers ORDER BY name";



    con.query(sql, function (err, result, fields) {

          if (err) throw err; 

          console.log(result);

    });

});