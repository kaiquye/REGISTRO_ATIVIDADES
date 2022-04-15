
import Table from 'react-bootstrap/Table'
import { ProjetoTabela } from './componets'
import './style.css'
export function CcustoTabela(props) {
    return (
        <section className='tabelaProjetos'>
            <div>
                <Table className='tabela-projetos-table' striped bordered hover>
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Setor</th>
                            <th>Descrição</th>
                            <th>Inicio</th>
                            <th>Centro de custo </th>
                            <th>Gerente</th>
                            <th>Decorrido</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data &&
                            <ProjetoTabela apagar={props.apagar} data={props.data} />
                        }
                    </tbody>
                </Table>
            </div>
        </section>
    )
}