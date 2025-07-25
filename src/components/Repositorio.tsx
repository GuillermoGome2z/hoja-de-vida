import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animationVariants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const proyectos = [
    {
        nombre: "Sistema de Nómina Web",
        descripcion:
            "Aplicación web para la gestión de nóminas, empleados y reportes. Automatiza el cálculo de salarios y prestaciones.",
        tecnologias: ["Blazor", ".NET 8", "SQL Server"],
        github: "https://github.com/GuillermoGome2z/ProyectoNomina",
        demo: "",
    },
    {
        nombre: "Dragon Ball API App",
        descripcion:
            "Aplicación interactiva que consume la API de Dragon Ball. Incluye filtros, paginación y diseño estilo Pokédex.",
        tecnologias: ["TypeScript", "Vite", "CSS", "HTML"],
        github: "https://github.com/GuillermoGome2z/Proyecto-Dragon-Ball",
        demo: "",
    },
    {
        nombre: "Portafolio Web",
        descripcion:
            "Hoja de vida en línea con diseño moderno, animaciones y formulario de contacto. Implementado solo con HTML, CSS y JS.",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/GuillermoGome2z/Portafolio",
        demo: "",
    },
];

const Repositorio: React.FC = () => {
    return (
        <section id="repositorio" className="py-5 bg-white">
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="text-center mb-4 text-dark">Proyectos</h2>
                    <Row className="g-4">
                        {proyectos.map((proyecto, index) => (
                            <Col md={6} lg={4} key={index}>
                                <Card className="border-0 shadow-sm h-100 rounded-4">
                                    <Card.Body className="d-flex flex-column justify-content-between">
                                        <div>
                                            <Card.Title className="fw-bold fs-5 text-primary">
                                                {proyecto.nombre}
                                            </Card.Title>
                                            <Card.Text className="small text-secondary">
                                                {proyecto.descripcion}
                                            </Card.Text>
                                            <div className="mt-3">
                                                {proyecto.tecnologias.map((tec, i) => (
                                                    <span
                                                        key={i}
                                                        className="badge bg-light text-dark border me-1 mb-1"
                                                    >
                                                        {tec}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="mt-4 d-flex gap-2">
                                            <a
                                                className="btn btn-outline-primary btn-sm"
                                                href={proyecto.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <FaGithub className="me-1" />
                                                GitHub
                                            </a>
                                            {proyecto.demo && (
                                                <a
                                                    className="btn btn-outline-secondary btn-sm"
                                                    href={proyecto.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FaExternalLinkAlt className="me-1" />
                                                    Ver Sitio
                                                </a>
                                            )}
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </motion.div>
            </Container>
        </section>
    );
};

export default Repositorio;
