import './style.css'
import { Form, Row, Button, Col, InputGroup } from 'react-bootstrap';
import { set, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts';

const ValidarCampos = yup.object().shape({
    setor: yup.string('Tipo de dado invalido').required('Setor não pode ser nullo.').max(40),
    descricao: yup.string('Tipo de dado invalido').required("A descrição é obrigatório").max(150, "A descrição precisa ter menosde 150 caracteres"),
    ccusto: yup.number('Tipo de dado invalido').required('Centro de custo não pode ser nullo.'),
    gerente: yup.number('Tipo de dado invalido').required('Gerente não pode ser nullo.'),
})

const iProjeto = (setor, descricao, inicio, ccusto, gerente) => {
    return ({
        setor,
        descricao,
        inicio,
        ccusto,
        gerente
    })
};

export function NovoProjeto(props) {

    const onSubmit = data => {
        console.log(data)
        const Projeto = iProjeto(data.setor, data.descricao, data.inicio || new Date(), data.ccusto, data.gerente);
        props.CadastrarProjeto(Projeto);
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
                        <Form.Label>Data de criação</Form.Label>
                        <Form.Control value='' type="date" placeholder="10/09/2009" />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Descrição do projeto</Form.Label>
                    <Form.Control name='descricao' {...register("descricao")} placeholder="Ex : Esse projeto é responsavel por..." />
                    <p className="error-message">{errors.descricao?.message}</p>
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Gerente do projeto</Form.Label>
                        <Form.Select name='ccusto' {...register("ccusto")}>
                            {props.Gerentes && props.Gerentes.map((gerente) => (
                                <option value={gerente.id} >{gerente.nome}</option>
                            ))
                            }
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Selecione um departamento (Centro de custo)</Form.Label>
                        <Form.Select name='gerente' {...register("gerente")} >
                            <option>Selecione um departamento. (Centro de custo)</option>
                            {props.Ccusto && props.Ccusto.map((ccusto) => (
                                <option value={ccusto.id} >{ccusto.setor}</option>
                            ))
                            }
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Button style={{ fontSize: "10px" }} type="submit">
                    Cadastrar
                </Button>
            </Form>
        </section>
    );
}
