import { CategoriaDto } from "../interface/categoriaDto";

export const GetAll = async () => {
    const res = await fetch("/api/categorias");
    const result = await res.json();
    return result;
}

export const GetById = async (id: string) => {
    const res = await fetch(`/api/categorias/${id}`);
    const result = await res.json();
    return result;
}

export const Create = async (categoria: CategoriaDto) => {
    const res = await fetch("/api/categorias", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(categoria)
    });
    const result = await res.json();
    return result;
}

export const Update = async (categoria: CategoriaDto) => {
    const res = await fetch(`/api/categorias/${categoria.Id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(categoria)
    });
    const result = await res.json();
    return result;
}

export const Remove = async (id: string) => {
    const res = await fetch(`/api/categorias/${id}`, {
        method: "DELETE",
    });
    const result = await res.json();
    return result;
}