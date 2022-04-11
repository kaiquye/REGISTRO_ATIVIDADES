import { cloneElement, useRef } from "react";
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import './style.css'

export const DrawerAdmin = function (props) {

    const mySidenav = useRef();
    const main = useRef();
    const DrawerAdmin = useRef();
    const myServices = useRef();

    function openNav() {
        mySidenav.current.style.width = "200px";
        main.current.style.marginLeft = "200px";
    }

    function closeNav() {
        mySidenav.current.style.width = "0";
        main.current.style.marginLeft = "0";
        props.current.style.backgroundColor = 'black';
    }

    function openServices() {
        return myServices.current.style.height = 'auto';
    }

    return (
        <section ref={DrawerAdmin} className="draweradmin">
            <div ref={mySidenav}   className="sidenav">
                <p style={{paddingLeft : "15px"}} >Menu</p>
                <Navbar.Brand style={{textAlign : 'center'}} onClick={() => closeNav()} href='#'>Voltar</Navbar.Brand>
                <a onClick={() => openServices()} href="#">Serviços</a>
                <div ref={myServices} className='myServices' >
                    <div>
                        <ul>
                            <li><a href="/projetos" >Projeto</a></li>
                            <li><a href="#" >Centro de Custos</a></li>
                        </ul>
                    </div>
                </div>
                <a href="#">Funcionarios</a>
                <a href="#">Registros</a>
                <a href="#">Usuarios Admin</a>
                <a href="#">Contato</a>
            </div>

            <div ref={main}>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand onClick={() => openNav()} href='#' >Menu</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Registros</Nav.Link>
                            <Nav.Link href="/projetos">Projetos</Nav.Link>
                            <Nav.Link href="#pricing">Cadastro</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </section >
    )
}