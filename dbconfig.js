
module.exports = {
  user          : process.env.NODE_ORACLEDB_USER || "singpara",

  password      : process.env.NODE_ORACLEDB_PASSWORD || "XXXXXXX",
  
  // https://oracle.github.io/node-oracledb/doc/api.html#connectionstrings
  connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "localhost/orclpdb",

  // Setting externalAuth is optional.  It defaults to false.  See:
  // https://oracle.github.io/node-oracledb/doc/api.html#extauth
  externalAuth  : process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
};