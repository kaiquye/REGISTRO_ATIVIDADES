import { DrawerPublic } from "../../componets/drawer-public";
import { AuthContext } from "./context"
import { TabelaRegistros } from "./componetes/tabela-registros";
import { Form, Row, Button, Col, InputGroup, Alert } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './style.css'
import { Popup } from "./componetes/popup";

const IRegistro = function (assunto, inicio = new Date(), termino, projeto) {
  return ({
    assunto,
    inicio,
    termino,
    projeto
  })
}
const ValidarCampos = yup.object().shape({
  assunto: yup.string('Tipo de dado invalido').required("A descrição é obrigatório").max(150, "A descrição precisa ter menosde 150 caracteres"),
  projeto: yup.number('Tipo de dado invalido').required('Projeto de custo não pode ser nullo.'),
  termino: yup.date('Tipo de dado invalido').required('Data não pode ser nullo.'),
  inicio: yup.date('Tipo invalido')
})

export function MeusRegistros() {
  const [registros, setRegistros] = useState();
  const [projetos, setProjetos] = useState();
  const [RegistrosMes, setRegistrosMes] = useState();
  const [sucess, setSucess] = useState(false);
  const { BuscarRegistros, NovoRegistro, BuscarProjetos, BuscarTodosRegistrosPMes } = useContext(AuthContext);
  const Navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const registros_ = await BuscarRegistros();
        const projetos_ = await BuscarProjetos();
        const TodosRegistrosMes = await BuscarTodosRegistrosPMes();
        setRegistros(registros_);
        setProjetos(projetos_);
        setRegistrosMes(TodosRegistrosMes);
      } catch (error) {
        // Recebe um objeto do tipo erro enviado pela conexão com o server.
        console.log(error)
        Navigate(`/error/${error.status}`);
      }
    })();
  }, [])


  const { register, handleSubmit } = useForm({
    resolver: yupResolver(ValidarCampos),
  });

  const onSubmit = function (data) {
    const Registro = IRegistro(data.assunto, data.inicio || new Date(), data.termino, data.projeto);
    if (NovoRegistro(Registro)) {
      setSucess(true);
      document.location.reload();
    }
  }


  return (
    <>
      <DrawerPublic />
      <section className="meusprojetos">
        <div style={{ position: 'absolute', width: '100%', height: '5%' }} >
          <Popup param={sucess} />
        </div>
        <div className='grafico-registros-div' >
          <div className="grafico-registros">
              {RegistrosMes && RegistrosMes.data.map((registro) => (
                <div className="registro-grafico">
                  <label>Projeto : {registro.projeto} </label>
                  <label>Quantidade de registros : {registro.registros}</label>
                </div>
              ))
              }
          </div>
        </div>
        <main>
          <form className='novoregistro' onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Assunto</Form.Label>
                <Form.Control type="text" name='assunto' {...register("assunto")} placeholder="Assunto" />
              </Form.Group>
            </div>
            <div>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Inicio</Form.Label>
                <Form.Control type="date" name='inicio'  {...register("inicio")} placeholder="10/09/2009" />
              </Form.Group>
            </div>
            <div>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Termino</Form.Label>
                <Form.Control type="date" name='termino' {...register("termino")} placeholder="10/09/2010" />
              </Form.Group>
            </div>
            <div>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Projeto</Form.Label>
                <Form.Select name='projeto' {...register("projeto")}  >
                  {projetos && projetos.data.map((projeto) => (
                    <option value={projeto.id} >{projeto.setor}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>
            <div>
              <Button style={{ fontSize: "10px" }} type="submit">
                Cadastrar
              </Button>
            </div>
          </form>
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
            <TabelaRegistros registros={registros} />
          </div>
        </main>
      </section>
    </>
  )
}
