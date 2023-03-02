const sql = require("mssql");
const config = {
    user: "controlfinanceusr",
    password: "Brasil82+82",
    server: "mssql-112705-0.cloudclusters.net",
    port: 19809,
    database: "m_ControlFinanceDb",
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
};

const pool = new sql.ConnectionPool(config);

export default pool;