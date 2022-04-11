import './style.css'
import { RegistrosTabela } from './componets/registro'
import { Table } from 'react-bootstrap';
export const TabelaRegistros = function (props) {


    return (
        <section className='tabela-componente-adm' >
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Assunto</th>
                        <th>Inicio</th>
                        <th>Termino</th>
                        <th>Projeto</th>
                        <th>Alocado</th>
                        <th>Funcionario</th>
                    </tr>
                </thead>
                <tbody>
                    <RegistrosTabela data={props.data} />
                </tbody>
            </Table>
        </section>
    )
}