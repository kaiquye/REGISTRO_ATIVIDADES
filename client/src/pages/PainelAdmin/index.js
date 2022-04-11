import { useContext, useEffect, useState } from "react"
import { AuthContext } from "./Contexts/index"
import { Graficos } from "./components/Grafico-Projeto/index"
import { TabelaRegistros } from "./components/Tabela-Registros";
import { DrawerAdmin } from "../../componets/drawer-admin";
import { GraficoCcusto } from "./components/Grafico-Ccusto";
import './style.css'
import { GraficoQuantidades } from "./components/Grafco-quantidade";

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
            <main className="page-admin">
                <section className="section-graficos">
                    {/* graficos do painel de administradores. */}
                    <div className="grafico-pizza-projetos">
                        {Projetos && <Graficos data={Projetos} />}
                    </div>
                </section>
                <section className="section-tabela">
                    {/* lista de registro de todos os usuarios */}
                    <div>
                        <p>Registros atrasados</p>
                        {Registros && <TabelaRegistros data={Registros} />}
                    </div>
                </section>
            </main>
        </>
    )
}
