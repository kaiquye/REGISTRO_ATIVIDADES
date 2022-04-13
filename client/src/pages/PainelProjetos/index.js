import { useContext, useEffect, useRef, useState } from "react"
import { DrawerAdmin } from "../../componets/drawer-admin";
import { FiltroProjeto } from "./components/Filtro";
import { TabelaProjetos } from "./components/tabela-projetos";
import { AuthContext } from "./contexts"
import { MenuProjeto } from "./components/menu";
import { NovoProjeto } from './components/CadastrarProjeto'
import { Loading } from "../../componets/Loading";
import './style.css'

export function PainelProjetos() {
    const { Filtro, BuscarProjetos, FiltrarProjetos, BuscarGerentes, BuscarCcustos } = useContext(AuthContext);
    const [Carregando, setCarregando] = useState(false);
    const [Gerentes, setGerentes] = useState();
    const [Ccustos, setCcusto] = useState();
    const [Projetos, setProjetos] = useState();
    const projeto = useRef();
    const Tabela = useRef();
    const Editar = useRef();
    const GerenteProjeto = useRef();
    const ProcuraProjeto = useRef();

    useEffect(() => {
        setProjetos(Filtro);
    }, [Filtro])

    useEffect(() => {
        setCarregando(true);
        (async () => {
            const gerentes = await BuscarGerentes();
            const Projetos = await BuscarProjetos();
            const Ccustos = await BuscarCcustos();
            setCcusto(Ccustos);
            setProjetos(Projetos)
            setGerentes(gerentes.data);
        })();
        setTimeout(() => {
            setCarregando(false)
        }, 1010);
    }, [])

    const openNewProject = function (page) {
        switch (page) {
            case "PROJETO":
                Tabela.current.style.display = "none";
                Editar.current.style.display = "none";
                GerenteProjeto.current.style.display = "none";
                ProcuraProjeto.current.style.display = "none";
                projeto.current.style.display = "flex"
                break;
            case "EXCLUIR":
                Tabela.current.style.display = "none";
                Editar.current.style.display = "flex";
                GerenteProjeto.current.style.display = "none";
                ProcuraProjeto.current.style.display = "none";
                projeto.current.style.display = "none"
                break;
            case "GERENTE":
                Tabela.current.style.display = "none";
                Editar.current.style.display = "none";
                GerenteProjeto.current.style.display = "flex";
                ProcuraProjeto.current.style.display = "none";
                projeto.current.style.display = "none"
                break;
            case "PROCURA":
                Tabela.current.style.display = "none";
                Editar.current.style.display = "none";
                GerenteProjeto.current.style.display = "none";
                ProcuraProjeto.current.style.display = "flex";
                projeto.current.style.display = "none"
                break;
            default:
                Tabela.current.style.display = "flex";
                Editar.current.style.display = "none";
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
                    {Carregando === false ?
                        <>
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
                                <div className='formulario-novo' ref={projeto} style={{ display: "none" }} >
                                    <h3>Cadastro de projetos</h3>
                                    <p>Formulario de cadastro de novos projetos</p>
                                    <NovoProjeto Gerentes={Gerentes} Ccusto={Ccustos} />
                                </div>
                                <div className='editar-projeto' ref={Editar} style={{ display: "none" }} >
                                    <div className='filtro-editar-projeto'>
                                        {Projetos && <FiltroProjeto filtrar={FiltrarProjetos} data={Projetos} />}
                                    </div>
                                    <div className='tabela-editar-anuncio'>
                                        {Projetos && <TabelaProjetos data={Projetos} />}
                                    </div>
                                </div>
                                <div ref={GerenteProjeto} style={{ display: "none" }} >
                          // GerenteProjeto
                                </div>
                                <div ref={ProcuraProjeto} style={{ display: "none" }} >
                          // ProcuraProjeto
                                </div>
                            </div>
                        </>
                        :
                        <Loading />
                    }
                </div>
            </section>
        </main>
    )

}