const mysql = require('mysql')

const db = mysql.createConnection({
	// host: "134.122.100.143",
	// user: "qsaatmtntb",
	// password: "979WBccT6F",
	// database:"qsaatmtntb",
	// port:8082,
	host: "localhost",
	user: "root",
	password: "root",
	database:"nodetest",
	port:8889,
	pool: {
	    max: 5,
	    min: 0,
	    acquire: 30000,
	    idle: 10000
	}
});
db.connect(function(err) {
  if (err){
  	console.log(err);
  }else{
  	console.log("Connected!");
  }
});
// const db = mysql.createPool({
// 	connectionLimit : 10,
// 	host: "134.122.100.143",
// 	user: "qsaatmtntb",
// 	password: "979WBccT6F",
// 	database:"qsaatmtntb"
// })

module.exports = db;