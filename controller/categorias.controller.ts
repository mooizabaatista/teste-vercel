import { CategoriaDto } from "../interface/categoriaDto"
import { GetAllService, GetByIdService, CreateService, UpdateService, RemoveService } from ".././services/categoria.service";

export const GetAll = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await GetAllService();
            resolve(result);
        }
        catch (error) {
            reject(error);
        }
    })
}

export const GetById = (id: string) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await GetByIdService(id);
            resolve(result);
        }
        catch (error) {
            reject(error);
        }
    })
}

export const Create = (categoria: CategoriaDto) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await CreateService(categoria);
            resolve(result);
        }
        catch (error) {
            reject(error);
        }
    })
}

export const Update = (categoria: CategoriaDto) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await UpdateService(categoria);
            resolve(result);
        }
        catch (error) {
            reject(error);
        }
    })
}

export const Remove = (id: string) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await RemoveService(id);
            resolve(result);
        }
        catch (error) {
            reject(error);
        }
    })
}