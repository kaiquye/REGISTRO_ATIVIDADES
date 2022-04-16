import { DrawerPublic } from "../../componets/drawer-public";
import { AuthContext } from "./context"
import { TabelaRegistros } from "./componetes/tabela-registros";
import { Form, Row, Button, Col, InputGroup } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './style.css'

const IRegistro = function (assunto, inicio = new Date(), termino, projeto) {
  if (!assunto || !termino || projeto) {
    return alert('Preencha todos os campos')
  }
  return ({
    assunto,
    inicio,
    termino,
    projeto
  })
}

export function MeusRegistros() {
  const [registros, setRegistros] = useState();
  const { BuscarRegistros, NovoRegistro } = useContext(AuthContext);
  const Navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const registros_ = await BuscarRegistros();
        setRegistros(registros_)
      } catch (error) {
        Navigate(`/error/${error.status}`);
      }
    })();
  }, [])

  return (
    <>
      <DrawerPublic />
      <section className="meusprojetos">
        <div>
          <h1>Meus Registros</h1>
        </div>
        <main>
          <div className='novoregistro'>
            <div>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Assunto</Form.Label>
                <Form.Control type="text" placeholder="Assunto" />
              </Form.Group>
            </div>
            <div>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Inicio</Form.Label>
                <Form.Control type="date" placeholder="10/09/2009" />
              </Form.Group>
            </div>
            <div>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Termino</Form.Label>
                <Form.Control type="date" placeholder="10/09/2010" />
              </Form.Group>
            </div>
            <div>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Projeto</Form.Label>
                <Form.Select >
                  <option>''</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div>
              <Button style={{ fontSize: "10px" }} type="submit">
                Buscar
              </Button>
            </div>
          </div>
          <div className='filtroregistro'>
            <div>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Select >
                  <option>Projetos</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Select >
                  <option>Data</option>
                </Form.Select>
              </Form.Group>
            </div>
            <Button style={{ fontSize: "10px" }} type="submit">
              Buscar
            </Button>
          </div>
          <div className="tabelaregistros">
          //tabela
            <TabelaRegistros registros={registros} />
          </div>
        </main>
      </section>
    </>
  )
}
