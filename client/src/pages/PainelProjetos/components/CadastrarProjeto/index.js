import Feedback from 'react-bootstrap/Feedback'
import { Form, Row, Button, Col, InputGroup } from 'react-bootstrap';
import { useState } from 'react'

export function NovoProjeto() {
    return (
        <Form className='formulario-projeto'>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Setor</Form.Label>
                    <Form.Control type="text" value='' placeholder="Nome do projeto" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control value='' type="password" placeholder="Password" />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Data de criação</Form.Label>
                <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Row className="mb-3">

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Centro de custo</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Gerente</Form.Label>
                    <Form.Select defaultValue="">
                        <option></option>
                        <option>...</option>
                    </Form.Select>
                </Form.Group>
            </Row>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}
