import Link from "next/link";

const Nav = () => {
    return (
        <div>
            <header>
                <Link href="/">Home</Link>
                <Link href="/categorias">Categorias</Link>
                <Link href="/lancamentos">Lancamentos</Link>
            </header>
        </div>
    );
};

export default Nav;
