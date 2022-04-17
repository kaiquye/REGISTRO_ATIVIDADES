
import Table from 'react-bootstrap/Table'
import { ProjetoTabela } from './componets'
import './style.css'
export function TabelaRegistros(props) {
  return (
    <section className='tabelaRegistros'>
      <div>
        <Table className='tabela-registros-table' striped bordered hover>
          <thead>
            <tr>
              <th>Status</th>
              <th>Assunto</th>
              <th>Email</th>
              <th>Inicio</th>
              <th>Termino</th>
              <th>Projeto</th>
              <th>Decorrido</th>
            </tr>
          </thead>
          <tbody>
            {props.registros && <ProjetoTabela apagar={props.apagar} data={props.registros} />}
          </tbody>
        </Table>
      </div>
    </section>
  )
}
