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

  // ตัวอย่างการใช้คำสั่ง SQL UPDATE
  var sql = "UPDATE customers SET address = 'Canyon 123' WHERE name = 'Jason'";
  con.query(sql, function (err, result, fields) {
    if (err) throw err;

    // แสดงจำนวนแถวที่ได้รับผลกระทำ (affected rows)
    console.log(result.affectedRows + " record(s) updated");

    // ปิดการเชื่อมต่อ MySQL
    con.end();
  });
});
