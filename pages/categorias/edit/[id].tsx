import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Nav from "../../../components/nav";
import { Update, GetById } from "../../../dal/categoria";
import { CategoriaDto } from "../../../interface/categoriaDto";

const Index = () => {

    const [categoria, setCategoria] = useState({} as CategoriaDto);
    const router = useRouter();

    const handleSave = async () => {
        Update(categoria).then((res) => {
            if (res) router.push("/categorias");
            console.log(res);
        });
    }

    useEffect(() => {
        const id = window.location.href.split("edit/").pop() as string;
        GetById(id).then((res) => {
            setCategoria(res[0]);
        })
    }, [])

    return (
        <div>
            <pre>{JSON.stringify(categoria, null, 2)}</pre>
            <Nav />
            <h1>Categorias Edit</h1>
            <Link href="/categorias">Voltar</Link>
            <br /><br />
            <input type="text" placeholder="Digite o nome" id="Nome" name="Nome" value={categoria.Nome} onChange={(e) => setCategoria({ ...categoria, Nome: e.target.value })} />
            <br /><br />
            <button onClick={() => handleSave()}>Editar</button>
        </div>
    );
};

export default Index;
