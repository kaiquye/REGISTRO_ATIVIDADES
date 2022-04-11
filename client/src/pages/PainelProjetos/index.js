import { useContext, useEffect } from "react"
import { DrawerAdmin } from "../../componets/drawer-admin";
import { TabelaProjetos } from "./components/tabela-projetos";
import { AuthContext } from "./contexts"
import './style.css'

export function PainelProjetos() {
    const { BuscarProjetos, Projetos } = useContext(AuthContext);

    useEffect(() => {
        BuscarProjetos();
    }, [])

    return (
        <main>
            <DrawerAdmin />
            <section className='main-projetos' >
                <div className='menu-projetos'>
                    menu
                </div>
                <div className='conteudo-projetos'>
                    <div >
                        <h1>Lista de projetos</h1>
                        {Projetos && <TabelaProjetos data={Projetos} />}
                    </div>
                </div>
            </section>
        </main>
    )

}