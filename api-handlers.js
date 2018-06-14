var oracledb    = require('oracledb');
var db          = require('./oracledb.js');

var addRequirement = function(req,res) {
	let reqData = req.body;
 let sql = "select * from requiremnts where requirementId = :reqId"
  db.doConnect(function(err, connection){
    console.log("INFO: Database - Retrieving CURRENT_DATE FROM DUAL");
    if (err) {
      console.log("ERROR: Unable to get a connection ");
      return "{\"success\" : \"false\"}";
    } else {
      db.doExecute(
        connection, sql
        ,[reqId],{extendedMetaData: false} // PASS BIND PARAMS IN HERE - SEE ORACLEDB DOCS
        , function(err, result) {
            if (err) {
              db.doRelease(connection);     // RELEASE CONNECTION
              return "{\"success\" : \"false\"}";                 // ERROR
            } else {
               db.doRelease(connection);     // RELEASE CONNECTION
			   console.log(result.rows);
               return callback(err, result.rows);    // ALL IS GOOD
            }
          }
      );
    }
  });
};

var getRequirement = function(req,res) {
	let reqId = req.query.id;
 let sql = "select * from requiremnts where requirementId = :reqId"
  db.doConnect(function(err, connection){
    console.log("INFO: Database - Retrieving CURRENT_DATE FROM DUAL");
    if (err) {
      console.log("ERROR: Unable to get a connection ");
      return "{\"success\" : \"false\"}";
    } else {
      db.doExecute(
        connection, sql
        ,[reqId],{extendedMetaData: false} // PASS BIND PARAMS IN HERE - SEE ORACLEDB DOCS
        , function(err, result) {
            if (err) {
              db.doRelease(connection);     // RELEASE CONNECTION
              return "{\"success\" : \"false\"}";                 // ERROR
            } else {
               db.doRelease(connection);     // RELEASE CONNECTION
			   console.log(result.rows);
               return callback(err, result.rows);    // ALL IS GOOD
            }
          }
      );
    }
  });
};


var updateRequirement = function(req,res) {
	let reqData = req.body;
 let sql = "select * from requiremnts where requirementId = :reqId"
  db.doConnect(function(err, connection){
    console.log("INFO: Database - Retrieving CURRENT_DATE FROM DUAL");
    if (err) {
      console.log("ERROR: Unable to get a connection ");
      return "{\"success\" : \"false\"}";
    } else {
      db.doExecute(
        connection, sql
        ,[reqId],{extendedMetaData: false} // PASS BIND PARAMS IN HERE - SEE ORACLEDB DOCS
        , function(err, result) {
            if (err) {
              db.doRelease(connection);     // RELEASE CONNECTION
              return "{\"success\" : \"false\"}";                 // ERROR
            } else {
               db.doRelease(connection);     // RELEASE CONNECTION
			   console.log(result.rows);
               return callback(err, result.rows);    // ALL IS GOOD
            }
          }
      );
    }
  });
};

module.exports.updateRequirement = updateRequirement;
module.exports.getRequirement  = getRequirement;

module.exports.addRequirement  = addRequirement;

