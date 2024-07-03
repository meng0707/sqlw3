const mysql = require('mysql');

// กำหนดการเชื่อมต่อ MySQL
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"  // เพิ่ม database ที่ต้องการใช้งาน (ถ้ามี)
});

// เชื่อมต่อ MySQL

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to MySQL");

  // ตัวอย่างการใช้งาน SQL query
  var sql = "SELECT * FROM Customers";
  con.query(sql, function (err, results, fields) {
    if (err) throw err;

    // แสดงผลลัพธ์ที่ได้จากคำสั่ง SQL SELECT
    console.log(results);

    // วนลูปและแสดงข้อมูลแต่ละแถว
    results.forEach((row) => {
      console.log(`ID: ${row.id}, NAME: ${row.name}, ADDRESS: ${row.address}`);
    });
  });
});
