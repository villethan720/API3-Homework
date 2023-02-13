const Pool = require("pg").Pool;

const pool = new Pool({
    user:"ethanvilla",
    host: "localhost",
    database: "ethanvilla",
    port: 5432,
});

module.exports = pool;