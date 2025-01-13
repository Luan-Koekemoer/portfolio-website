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


function orderPriority(cards) {
  var unordered = cards.filter(c => c.priority == -1);
  var ordered = cards.filter(c => c.priority > -1).sort();
  return ordered.concat(unordered);
}


// Define a route
router.get('/qualifications', (req, res) => {
    const sql = "select * from cards where card_type = 'qualification'"
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(orderPriority(result));
      });
});

// Define a route
router.get('/projects', (req, res) => {
  const sql = "select * from cards where card_type = 'project'"
  con.query(sql, function (err, result) {
      if (err) throw err;
      res.send(orderPriority(result));
    });
});


// export the router module so that server.js file can use it
module.exports = router;