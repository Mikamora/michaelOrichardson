import * as mysql from 'mysql';
import config from "../config";
import user from '../db/dbqueries/userQueries/userQ';



export const pool = mysql.createPool(config.db)


export const Query = <T = any>(query: string, values?: any) => {
    return new Promise<T>((resolve, reject) => {

        const sql = mysql.format(query, values);


        pool.query(sql, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        })

    })
}


export default { 
    user
}