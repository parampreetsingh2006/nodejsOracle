var dbconfig = require("./dbconfig.js");  //Same as per the official documentation

//oracledb.connectionClass = dbconfig.connectionClass,
var oracledb = require('oracledb');

oracledb.createPool({
    user:             dbconfig.user,
    password:         dbconfig.password,
    connectString:    dbconfig.connectString,
    poolMax:          10,
    poolMin:          2,
    poolIncrement:    5,
    poolTimeout:      4
}, function(err, pool) {

    if (err) {
      console.log("ERROR: ", new Date(), ": createPool() callback: " + err.message);
      return;
    }
    require('./oracledb.js')(pool);
});