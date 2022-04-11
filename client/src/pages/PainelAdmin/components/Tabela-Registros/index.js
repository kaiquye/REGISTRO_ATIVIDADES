import './style.css'
import { RegistrosTabela } from './componets/registro'

export const TabelaRegistros = function (props) {


    return (
        <section className='tabela-componente-adm' >
                <table>
                    <table>
                        <tr>
                            <th>Assunto</th>
                            <th>Inicio</th>
                            <th>Termino</th>
                            <th>Projeto</th>
                            <th>Alocado</th>
                            <th>Funcionario</th>
                        </tr>
                        <RegistrosTabela data={props.data} />
                    </table>
                </table>
        </section>
    )
}