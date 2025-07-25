import React from "react";
import { Container, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animationVariants";

const Perfil: React.FC = () => {
  return (
    <section id="perfil" className="bg-light py-5">
      <Container className="container-md">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card className="shadow-sm border-0 rounded-4 p-4">
            <Card.Body>
              <h2 className="text-center mb-4" >Perfil Profesional</h2>
              <p className="fs-5 text-muted">
                Soy una persona proactiva, responsable y orientada a resultados, con
                capacidad para adaptarme a nuevos desafíos. Me esfuerzo
                por aprender constantemente y contribuir positivamente al entorno
                laboral, buscando siempre aportar mis habilidades para alcanzar los
                objetivos del equipo y de la empresa.
              </p>
            </Card.Body>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
};

export default Perfil;
