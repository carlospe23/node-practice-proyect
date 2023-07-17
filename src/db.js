import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'Shimoneta_23',
    port: 3306,
    database:'companydb'
})