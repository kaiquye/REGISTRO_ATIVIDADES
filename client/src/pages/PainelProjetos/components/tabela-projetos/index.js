
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
                        
                        <ProjetoTabela apagar={props.apagar} data={props.data} />
                    </tbody>
                </Table>
            </div>
        </section>
    )
}