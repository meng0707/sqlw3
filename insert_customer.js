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
  var sql = "INSERT INTO Customers (name, address) VALUES ('Jason', 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Customer Created.");
  });
});