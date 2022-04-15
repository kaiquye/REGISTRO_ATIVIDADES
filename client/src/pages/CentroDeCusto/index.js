import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/index";
import { NovoCentroDeCusto } from "./components/CadastroFormulario/index";
import { MenuCcusto } from "./components/menu";
import { useRef } from "react";
import './style.css'
import { DrawerAdmin } from "../../componets/drawer-admin";
import { CcustoTabela } from "./components/tabela-ccustos";

export function CentroDeCustos() {
    const { Buscar, Ccustos, Cadastrar } = useContext(AuthContext);
    const pageListCcusto = useRef();
    const pageCreateCcusto = useRef();

    useEffect(() => {
        // Projetos do usuario comum
        (async () => {
            await Buscar()
        })();
    }, [])

    const openWindow = function (page) {
        switch (page) {
            case "LIST":
                pageListCcusto.current.style.display = "flex";
                pageCreateCcusto.current.style.display = "none";
                break;
            case "CREATE":
                pageListCcusto.current.style.display = "none";
                pageCreateCcusto.current.style.display = "flex";
                break;
            default:
                pageListCcusto.current.style.display = "flex";
                pageCreateCcusto.current.style.display = "none";
                break;
        }
    }
    return (
        <main>
            <DrawerAdmin />
            <section className="page-ccusto">
                <div className="menu-ccusto" >
                    <MenuCcusto openWindow={openWindow} />
                </div>
                <div className="list-ccusto">
                    <div className="mensagem-ccusto">
                        <h1>Centro de custo</h1>
                    </div>
                    <div ref={pageListCcusto} style={{ display: 'flex' }}>
                        <CcustoTabela data={Ccustos} />
                    </div>
                    <div ref={pageCreateCcusto} className='cadastro-ccusto' style={{ display: 'none' }}  >
                        <div>
                            <h4>Novo centro de custo</h4>
                        </div>
                        <NovoCentroDeCusto cadastrar={Cadastrar} />
                    </div>
                </div>
            </section>
        </main>
    )

}