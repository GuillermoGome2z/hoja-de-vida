import React, { useState, useRef } from "react";
import { Container, Alert } from "react-bootstrap";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animationVariants";

const Contacto: React.FC = () => {
    const [enviado, setEnviado] = useState(false);
    const [error, setError] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setEnviado(false);
        setError(false);

        const form = formRef.current;
        if (!form) return;

        const formData = new FormData(form);

        try {
            const res = await fetch("https://formsubmit.co/ajax/gomezguille391@gmail.com", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();

            if (data.success === "true") {
                setEnviado(true);
                form.reset(); // limpia los campos
            } else {
                setError(true);
            }
        } catch (err) {
            setError(true);
        }
    };

    return (
        <section id="contacto" className="bg-light py-5">
            <Container style={{ maxWidth: "640px" }}>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="text-center mb-4 text-dark">Contáctame</h2>

                    {enviado && (
                        <Alert variant="success" className="text-center">
                            ¡Gracias por tu mensaje!
                        </Alert>
                    )}
                    {error && (
                        <Alert variant="danger" className="text-center">
                            Hubo un error. Inténtalo de nuevo más tarde.
                        </Alert>
                    )}

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="p-4 bg-white shadow rounded-4"
                    >
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="box" />

                        <div className="mb-3">
                            <label className="text-center mb-4 text-dark">Nombre completo</label>
                            <input
                                type="text"
                                name="nombre"
                                className="form-control"
                                placeholder="Ej. Juan Pérez"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="text-center mb-4 text-dark">Correo electrónico</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="ejemplo@correo.com"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="text-center mb-4 text-dark">Mensaje</label>
                            <textarea
                                name="mensaje"
                                className="form-control"
                                rows={4}
                                placeholder="Escribe tu mensaje aquí..."
                                required
                            ></textarea>
                        </div>

                        <div className="d-grid">
                            <button type="submit" className="btn btn-dark btn-lg">
                                Enviar mensaje
                            </button>
                        </div>
                    </form>
                </motion.div>
            </Container>
        </section>
    );
};

export default Contacto;
