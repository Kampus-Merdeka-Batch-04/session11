const Pool = require("pg").Pool

const connection = new Pool({
  user: "postgres",
  host: "localhost",
  database: "kampus_merdeka",
  password: "postgres",
  port: 5432
})

module.exports = connection