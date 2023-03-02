import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Nav from "../../components/nav";
import { Create } from "../../dal/categoria";
import { CategoriaDto } from "../../interface/categoriaDto";

const Index = () => {

    const [categoria, setCategoria] = useState({} as CategoriaDto);
    const router = useRouter();

    const handleSave = async () => {
        Create(categoria).then((res) => {
            if (res) router.push("/categorias");
        });
    }

    return (
        <div>
            <Nav />
            <h1>Categorias Create</h1>
            <Link href="/categorias">Voltar</Link>
            <br /><br />
            <input type="text" placeholder="Digite o nome" id="Nome" name="Nome" onChange={(e) => setCategoria({ ...categoria, Nome: e.target.value })} />
            <br /><br />
            <button onClick={() => handleSave()}>Cadastrar</button>
        </div>
    );
};

export default Index;
