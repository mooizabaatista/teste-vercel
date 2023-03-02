import Link from "next/link";
import { useEffect, useState } from "react";
import Nav from "../../components/nav";
import { GetAll, Remove } from "../../dal/categoria";
import { CategoriaDto } from "../../interface/categoriaDto";

const Index = () => {
    const [categorias, setCategorias] = useState([] as CategoriaDto[])

    const handleRemove = (e: string) => {
        Remove(e)
            .then((res) => {
                GetAll().then((res) => setCategorias(res))
            })
    }

    useEffect(() => {
        GetAll().then((res) => setCategorias(res))
    }, [])

    return (
        <div>
            <Nav />
            <h1>Categorias Index</h1>
            <Link href="/categorias/create">Cadastrar</Link>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array.isArray(categorias) &&
                        categorias.map((categoria: CategoriaDto, index: number) => {
                            return (
                                <tr key={index}>
                                    <td>{categoria.Nome}</td>
                                    <td>
                                        <Link href={`/categorias/edit/${categoria.Id}`}>Editar</Link>
                                        <span onClick={(e) => handleRemove(categoria.Id)} >Remover</span>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Index;
