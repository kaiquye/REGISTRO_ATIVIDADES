
import Table from 'react-bootstrap/Table'
import { ProjetoTabela } from './componets'
import './style.css'
export function TabelaRegistros(props) {
  return (
    <section className='tabelaRegistros'>
      <div>
        <Table className='tabela-registros-table' striped bordered hover>
          <thead>
            {
              console.log(props.registros)
            }
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
            {/* <ProjetoTabela apagar={props.apagar} data={props.data} /> */}
          </tbody>
        </Table>
      </div>
    </section>
  )
}
