import './style.css'
import { useState } from 'react';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
export function FiltroProjeto(props) {
    const [data_inicio, setInico] = useState();
    const [funcionario, setFuncionario] = useState();
    return (
        <section>
            <div style={{ paddingLeft: '10px' }} >
                <label style={{ fontSize: '10px' }}>Filtrar</label>
            </div>
            <div className='filtroprojeto'>
                <div className='select-filtro-gerente'>
                    <Form.Select className='select-projeto' style={{ borderRadius: '15px', fontSize: '7px', height: '25px' }} id="disabledSelect">
                        <option>Selecione um gerente...</option>
                        {props.data &&
                            props.data.gerente.map((gerente) => (
                                <option>{gerente.nome}</option>
                            ))
                        }
                    </Form.Select>
                </div>
                <div className='select-filtro-diastrb'>
                    <Form.Select style={{ borderRadius: '15px', fontSize: '7px', height: '25px' }} className='select-projeto' id="disabledSelect">
                        <option>Centro de custo...</option>
                        {props.data &&
                            props.data.ccusto.map((gerente) => (
                                <option>{gerente.setor}</option>
                            ))
                        }
                    </Form.Select>
                </div>
                <div className='select-filtro-ccusto'>
                    <Form.Select style={{ borderRadius: '15px', fontSize: '7px', height: '25px' }} className='select-projeto' id="disabledSelect">
                        <option>Selecione um gerente...</option>
                        {props.data &&
                            props.data.ccusto.map((gerente) => (
                                <option>{gerente.setor}</option>
                            ))
                        }
                    </Form.Select>
                </div>
                <div className='select-filtro-ccusto'>
                    <Form.Control style={{ borderRadius: '15px', fontSize: '7px', height: '25px' }} type="number" placeholder="Dias decorrios" onChange={(e) => data_inicio(e.target.value)} />
                </div>
                <div className='select-filtro-ccusto'>
                    <Form.Control style={{ borderRadius: '15px', fontSize: '7px', height: '25px' }} type="text" placeholder="Funcionários" onChange={(e) => setFuncionario(e.target.value)} />
                </div>
                <div>
                    <Button onClick={() => alert(funcionario)} style={{ borderRadius: '15px', fontSize: '7px', height: '25px' }} variant="primary" type="button">
                        Procurar
                    </Button>
                </div>
            </div>
        </section >
    )
}