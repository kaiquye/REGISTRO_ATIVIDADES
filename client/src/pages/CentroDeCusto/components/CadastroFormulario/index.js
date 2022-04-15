import './style.css'
import { Form, Row, Button, Col, InputGroup } from 'react-bootstrap';
import { set, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const ValidarCampos = yup.object().shape({
    setor: yup.string('Tipo de dado invalido').required('Setor não pode ser nullo.').max(40),
    livres: yup.number('Tipo de dado invalido'),
    empresa: yup.string('Tipo de dado invalido').required('Centro de custo não pode ser nullo.'),
    status: yup.number('Tipo de dado invalido').required('Gerente não pode ser nullo.'),
})

const ICcusto = (setor, gastos = 0, livres, empresa, status, decorrido = 0) => {
    return ({
        setor,
        gastos,
        livres,
        empresa,
        status,
        decorrido
    })
};

export function NovoCentroDeCusto(props) {

    const onSubmit = data => {
        console.log(data)
        const Projeto = ICcusto(data.setor, data.gastos, data.livres, data.empresa, data.status, data.decorrido);
        props.cadastrar(Projeto);
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(ValidarCampos)
    })

    return (
        <section className='formulario-projeto'>
            <Form className='formulario' onSubmit={handleSubmit(onSubmit)}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Setor</Form.Label>
                        <Form.Control name='setor' {...register("setor")} type="text" placeholder="Nome do projeto" />
                        <p className="error-message">{errors.setor?.message}</p>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Livres</Form.Label>
                        <Form.Control name='livres' {...register("livres")} type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Gastos</Form.Label>
                        <Form.Control name='gastos' {...register("gastos")} type="text" placeholder="" />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Empresa</Form.Label>
                    <Form.Control name='empresa' {...register("empresa")} placeholder="Ex : Esse projeto é responsavel por..." />
                    <p className="error-message">{errors.empresa?.message}</p>
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Status</Form.Label>
                        <Form.Select name='status' {...register("status")}>
                            <option value={1} >Ativo</option>
                            <option value={1}>Inativo</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Decorrido</Form.Label>
                        <Form.Control name='decorrido' {...register("decorrido")} type="text" />
                    </Form.Group>
                </Row>
                <Button style={{ fontSize: "10px" }} type="submit">
                    Cadastrar
                </Button>
            </Form>
        </section>
    );
}
