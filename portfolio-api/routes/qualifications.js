// routes/users.js
const express = require('express');
const mysql = require('mysql');
const router = express.Router();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "maria",
    database: "portfoliodb"
  });

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


// Define a route
router.get('/', (req, res) => {
    const sql = "select * from cards where id = 1"
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
        res.send(result);// this gets executed when user visit http://localhost:3000/user
      });
});

router.get('/101', (req, res) => {
    res.send('this is user 101 route');// this gets executed when user visit http://localhost:3000/user/101
});

router.get('/102', (req, res) => {
    res.send('this is user 102 route');// this gets executed when user visit http://localhost:3000/user/102
});

// export the router module so that server.js file can use it
module.exports = router;