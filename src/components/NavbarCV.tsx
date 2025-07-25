import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarCV: React.FC = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="md" sticky="top">
            <Container>
                <Navbar.Brand href="#inicio">Mi CV</Navbar.Brand>
                <Navbar.Toggle aria-controls="cv-navbar" />
                <Navbar.Collapse id="cv-navbar">
                    <Nav className="ms-auto">
                        <Nav.Link href="#perfil">Perfil</Nav.Link>
                        <Nav.Link href="#formacion">Formación</Nav.Link>
                        <Nav.Link href="#experiencia">Experiencia</Nav.Link>
                        <Nav.Link href="#habilidades">Habilidades</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarCV;
