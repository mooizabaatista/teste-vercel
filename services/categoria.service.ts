import pool from '.././database/db';
import { CategoriaDto } from "../interface/categoriaDto";

export const GetAllService = () => {
    const sql = "SELECT * FROM categorias";
    return new Promise(async (resolve, reject) => {
        try {
            await pool.connect();
            const result = await pool.request().query(sql);
            resolve(result.recordset);
        }
        catch (err) {
            reject(err)
        }
    })
}

export const GetByIdService = (id: string) => {
    const sql = `SELECT * FROM categorias WHERE Id ='${id}'`;
    return new Promise(async (resolve, reject) => {
        try {
            await pool.connect();
            const result = await pool.request().query(sql);
            resolve(result.recordset);
        }
        catch (err) {
            reject(err)
        }
    })
}

export const CreateService = (categoria: CategoriaDto) => {
    const sql = `INSERT INTO Categorias (Nome) VALUES ('${categoria.Nome}')`;
    return new Promise(async (resolve, reject) => {
        try {
            await pool.connect();
            const result = await pool.request().query(sql);
            resolve(true);
        }
        catch (err) {
            reject(false)
        }
    })
}

export const UpdateService = (categoria: CategoriaDto) => {
    const sql = `UPDATE Categorias SET Nome = '${categoria.Nome}' WHERE Id = '${categoria.Id}'`;
    console.log(sql);
    return new Promise(async (resolve, reject) => {
        try {
            await pool.connect();
            const result = await pool.request().query(sql);
            resolve(true);
        }
        catch (err) {
            reject(false)
        }
    })
}

export const RemoveService = (id: string) => {
    const sql = `DELETE FROM Categorias WHERE Id = '${id}'`;
    return new Promise(async (resolve, reject) => {
        try {
            await pool.connect();
            const result = await pool.request().query(sql);
            resolve(true);
        }
        catch (err) {
            reject(false)
        }
    })
}