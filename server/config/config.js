
module.exports = {
    sql: {
      //Local database
      database: "matrimoney",
      username: "root",
      password: "",
      host: "localhost",
      port: "3306" ,
      dialect: "mysql",
      // logging: true,
      logging: console.log,
      timezone: "+05:30"
    },
    upload: {
      mode: "efs" //'efs' for efs mode
    },
    aws: {
      bucketName: "",
      accessKeyId: "",
      accessKeySecret: "",
      region: ""
    },
    baseUrl: "http://localhost:5000", 
    seedDB: false,
    seedDBForce: false,
    db: "sql",
    access_token_expire_time: 10 * 60,
    refresh_token_expire_time: 20 * 60,
    jwtSecret:"your_jwt_secret"
  };
  