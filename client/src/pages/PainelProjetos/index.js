import { useContext, useEffect, useRef } from "react"
import { DrawerAdmin } from "../../componets/drawer-admin";
import { FiltroProjeto } from "./components/Filtro";
import { TabelaProjetos } from "./components/tabela-projetos";
import { AuthContext } from "./contexts"
import { MenuProjeto } from "./components/menu";
import { NovoProjeto } from './components/CadastrarProjeto'
import './style.css'

export function PainelProjetos() {
    const { BuscarProjetos, Projetos, FiltrarProjetos } = useContext(AuthContext);
    const projeto = useRef();
    const Tabela = useRef();
    const ExcluirProjeto = useRef();
    const GerenteProjeto = useRef();
    const ProcuraProjeto = useRef();

    useEffect(() => {
        BuscarProjetos();
    }, [])

    const openNewProject = function (page) {
        switch (page) {
            case "PROJETO":
                Tabela.current.style.display = "none";
                ExcluirProjeto.current.style.display = "none";
                GerenteProjeto.current.style.display = "none";
                ProcuraProjeto.current.style.display = "none";
                projeto.current.style.display = "flex"
                break;
            case "EXCLUIR":
                Tabela.current.style.display = "none";
                ExcluirProjeto.current.style.display = "flex";
                GerenteProjeto.current.style.display = "none";
                ProcuraProjeto.current.style.display = "none";
                projeto.current.style.display = "none"
                break;
            case "GERENTE":
                Tabela.current.style.display = "none";
                ExcluirProjeto.current.style.display = "none";
                GerenteProjeto.current.style.display = "flex";
                ProcuraProjeto.current.style.display = "none";
                projeto.current.style.display = "none"
                break;
            case "PROCURA":
                Tabela.current.style.display = "none";
                ExcluirProjeto.current.style.display = "none";
                GerenteProjeto.current.style.display = "none";
                ProcuraProjeto.current.style.display = "flex";
                projeto.current.style.display = "none"
                break;
            default:
                Tabela.current.style.display = "flex";
                ExcluirProjeto.current.style.display = "none";
                GerenteProjeto.current.style.display = "none";
                ProcuraProjeto.current.style.display = "none";
                projeto.current.style.display = "none"
                break;
        }
    }

    return (
        <main>
            <DrawerAdmin />
            <section className='main-projetos' >
                <div className='menu-projetos'>
                    <MenuProjeto condicao={openNewProject} />
                </div>
                <div className='conteudo-projetos'>
                    <div className="top-projetos">
                        <div>
                            <h1>Dashboard de projetos</h1>
                            <p>Listando todos os projetos cadastros.</p>
                        </div>
                    </div>
                    <div className="conteudo-">
                        <div ref={Tabela} className='tabela-todos-projetos-' >
                            {Projetos && <FiltroProjeto filtrar={FiltrarProjetos} data={Projetos} />}
                            {Projetos && <TabelaProjetos data={Projetos} />}
                        </div>
                        <div ref={projeto} style={{ display: "none" }} >
                            <NovoProjeto />
                        </div>
                        <div ref={ExcluirProjeto} style={{ display: "none" }} >
                            // ExcluirProjeto
                        </div>
                        <div ref={GerenteProjeto} style={{ display: "none" }} >
                            // GerenteProjeto
                        </div>
                        <div ref={ProcuraProjeto} style={{ display: "none" }} >
                            // ProcuraProjeto
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )

}