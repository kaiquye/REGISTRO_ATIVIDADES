
import Table from 'react-bootstrap/Table'
import { ProjetoTabela } from './componets'
import './style.css'
export function TabelaProjetos(props) {
    return (
        <section className='tabelaProjetos'>
            <div>
                <Table className='tabela-projetos-table' striped bordered hover>
                    <thead>
                        <tr>
                            <th>Setor</th>
                            <th>Descrição</th>
                            <th>Inicio</th>
                            <th>Centro de custo </th>
                            <th>Gerente</th>
                            <th>Decorrido</th>
                        </tr>
                    </thead>
                    <tbody>
                       <ProjetoTabela data={props.data} />
                    </tbody>
                </Table>
            </div>
        </section>
    )
}