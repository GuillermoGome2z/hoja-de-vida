import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animationVariants";

const Formacion: React.FC = () => {
    return (
        <section id="formacion" className="bg-white py-5">
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="text-center mb-4 text-dark">Formación Académica</h2>
                    <Row className="g-4">
                        <Col md={6}>
                            <Card className="h-100 shadow-sm border-start border-2 border-primary rounded-4 p-3">
                                <Card.Body>
                                    <Card.Title className="fw-semibold">Ingeniería en Sistemas</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        Universidad Mariano Gálvez de Guatemala
                                    </Card.Subtitle>
                                    <Card.Text className="fs-5 text-justify">
                                        Actualmente cursando octavo semestre. Formación enfocada en desarrollo de software,
                                        bases de datos, redes y seguridad informática.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6}>
                            <Card className="h-100 shadow-sm border-start border-2 border-primary rounded-4 p-3">
                                <Card.Body>
                                    <Card.Title className="fw-semibold">
                                        Bachiller en Ciencias y Letras con Orientación en Computación
                                    </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        Colegio Francisco Orantes
                                    </Card.Subtitle>
                                    <Card.Text className="fs-5 text-justify">
                                        Graduado en nivel medio con énfasis en programación, sistemas
                                        operativos, lógica computacional y diseño web.
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

export default Formacion;
