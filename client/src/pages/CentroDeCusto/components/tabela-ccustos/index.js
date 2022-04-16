
import Table from 'react-bootstrap/Table'
import { ProjetoTabela } from './componets'
import './style.css'
export function CcustoTabela(props) {
  return (
    <section className='tabelaCcusto'>
      <div>
        <Table className='tabela-ccusto-table' striped bordered hover>
          <thead>
            <tr>
              <th>Status</th>
              <th>Setor</th>
              <th>empresa</th>
              <th>Livres</th>
              <th>Gastos</th>
              <th>Decorrido</th>
              <th>Ação</th>
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
