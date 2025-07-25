import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { FaGithub, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

const Header: React.FC = () => {
    return (
        <header
            className="text-white"
            style={{
                backgroundColor: "#1f1f1f",
                width: "100vw",
                padding: "3rem 0",
            }}
        >
            <Container>
                {/* Fila superior con imagen, nombre y contacto */}
                <Row className="align-items-center mb-4">
                    {/* Foto */}
                    <Col md={3} className="text-center mb-3 mb-md-0">
                        <div
                            style={{
                                width: "160px",
                                height: "160px",
                                overflow: "hidden",
                                borderRadius: "50%",
                                margin: "0 auto",
                                border: "3px solid white",
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                            }}
                        >
                            <img
                                src="/img 2.jpg"
                                alt="Foto personal"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                    </Col>

                    {/* Nombre y contacto */}
                    <Col md={9} className="text-md-start text-center">
                        <h1 className="display-5 fw-bold mb-2">
                            Guillermo Gomez Aguilera | Desarrollador Frontend
                        </h1>
                        <p className="lead mb-1">
                            Correo: gomezguille391@gmail.com | Tel: 5535-8119
                        </p>
                        <p className="lead mb-0">
                            <FaMapMarkerAlt className="me-2" />
                            Guazacapan Santa Rosa, Guatemala
                        </p>
                    </Col>
                </Row>

                {/* Navegación */}
                <Row>
                    <Col className="text-center">
                        <Nav className="justify-content-center">
                            <Nav.Link href="#perfil" className="text-white px-3">
                                Perfil
                            </Nav.Link>
                            <Nav.Link href="#formacion" className="text-white px-3">
                                Formación
                            </Nav.Link>
                            <Nav.Link href="#experiencia" className="text-white px-3">
                                Experiencia
                            </Nav.Link>
                            <Nav.Link href="#habilidades" className="text-white px-3">
                                Habilidades
                            </Nav.Link>
                            <Nav.Link href="#contacto" className="text-white px-3">
                                Contacto
                            </Nav.Link>
                        </Nav>
                    </Col>
                </Row>

                {/* Botones de redes sociales */}
                <Row className="mt-4">
                    <Col className="text-center">
                        <a
                            href="https://github.com/GuillermoGome2z"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-light mx-2"
                        >
                            <FaGithub className="me-2" />
                            GitHub
                        </a>
                        <a
                            href="https://instagram.com/guille_gomezzz2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-light mx-2"
                        >
                            <FaInstagram className="me-2" />
                            Instagram
                        </a>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
