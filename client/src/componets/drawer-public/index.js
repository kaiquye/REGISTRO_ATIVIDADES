import { cloneElement, useRef } from "react";
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import './style.css'

export const DrawerPublic = function (props) {

  return (
    <section className="drawerpublic">
      <div>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="#home">Sou administrador</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </section >
  )
}
