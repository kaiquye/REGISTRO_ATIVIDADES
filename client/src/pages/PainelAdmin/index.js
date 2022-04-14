import { useContext, useEffect, useState } from "react"
import { AuthContext } from "./Contexts/index"
import { Graficos } from "./components/Grafico-Projeto/index"
import { TabelaRegistros } from "./components/Tabela-Registros";
import { DrawerAdmin } from "../../componets/drawer-admin";
import { GraficoCcusto } from "./components/Grafico-Ccusto";
import { MenuProjeto } from './components/menu/index'
import './style.css'
import imgError from './others.png'

export function PainelAdmin() {
    const { BuscarProjetos, Projetos, Registros, BuscarRegistroseProjetos } = useContext(AuthContext);

    useEffect(() => {
        // este useEffect carregar todos os valores da tela do administrador. Caso queira carregar mais dados, não utilizar o mesmo.
        BuscarProjetos();
        BuscarRegistroseProjetos();
    }, []);

    return (
        <>
            <DrawerAdmin />
            {!Projetos < 0 ? <div className="mensagem-sem-projeto">
                <img src={imgError} style={{ width: '10%' }} />
                <h3>Nenhum registro foi encontrado.</h3>
                <button>Cadastrar novo registro</button>
            </div>
                :
                <main className="page-admin">
                    <div className='menu-registros' >
                        <MenuProjeto />
                    </div>
                    <section className="section-graficos">
                        {/* graficos do painel de administradores. */}
                        <div className="grafico-pizza-projetos">
                            {Projetos && <Graficos data={Projetos} />}
                        </div>
                    </section>
                    <section className="section-tabela">
                        {/* lista de registro de todos os usuarios */}
                        <div className='TABELA-ADM'>
                            <p>Registros atrasados</p>
                            {Registros && <TabelaRegistros data={Registros} />}
                        </div>
                    </section>
                </main>}

        </>
    )
}
