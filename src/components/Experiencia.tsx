import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animationVariants";

const Experiencia: React.FC = () => {
    return (
        <section id="experiencia" className="bg-light py-5">
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="text-center mb-4 text-dark">Experiencia Laboral</h2>
                    <Row className="g-4">
                        <Col md={6}>
                            <Card className="h-100 shadow-sm border-start border-2 border-success rounded-4 p-3">
                                <Card.Body>
                                    <Card.Title className="fw-semibold">
                                        Desarrollador Web Frontend (Simulado)
                                    </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        Freelance | Enero 2024 - Presente
                                    </Card.Subtitle>
                                    <Card.Text className="fs-5 text-justify">
                                        Desarrollo de páginas web responsivas utilizando React, Bootstrap y
                                        Tailwind. Integración de APIs y optimización para dispositivos móviles.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6}>
                            <Card className="h-100 shadow-sm border-start border-2 border-success rounded-4 p-3">
                                <Card.Body>
                                    <Card.Title className="fw-semibold">
                                        Asistente Técnico de Soporte (Simulado)
                                    </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        Empresa XYZ | Julio 2023 - Diciembre 2023
                                    </Card.Subtitle>
                                    <Card.Text className="fs-5 text-justify">
                                        Instalación de software, mantenimiento de redes internas y soporte
                                        técnico básico a usuarios de la empresa.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </motion.div>
            </Container>
        </section>
    );
};

export default Experiencia;
