const config = {
  sql: {
    //Local database
    database: "matrimony",
    username: "root",
    password: "",
    host: "localhost",
    port: "3306",
    dialect: "mysql",
    // logging: true,
    logging: console.log,
    timezone: "+05:30",
  },
  upload: {
    mode: "efs", //'efs' for efs mode
  },
  aws: {
    bucketName: "",
    accessKeyId: "",
    accessKeySecret: "",
    region: "",
  },
  baseUrl: "http://localhost:5000",
  seedDB: false,
  seedDBForce: false,
  db: "sql",
  access_token_expire_time: 10 * 24 * 60 * 60, // 10 days in seconds

  refresh_token_expire_time: 20 * 24 * 60 * 60,
  jwtSecret: "your_jwt_secret",
};
export default config;
