import React from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaDatabase,
} from "react-icons/fa";
import { SiBootstrap, SiMysql } from "react-icons/si";

const skills = [
    { name: "HTML5", icon: <FaHtml5 size={40} color="#e34c26" /> },
    { name: "CSS3", icon: <FaCss3Alt size={40} color="#264de4" /> },
    { name: "Git", icon: <FaGitAlt size={40} color="#f34f29" /> },
    { name: "Bootstrap", icon: <SiBootstrap size={40} color="#563d7c" /> },
    { name: "MySQL", icon: <SiMysql size={40} color="#00758f" /> },
    { name: "SQL Server", icon: <FaDatabase size={40} color="#6c757d" /> },
];

const Habilidades: React.FC = () => {
    return (
        <section
            id="habilidades"
            className="py-5 text-white"
            style={{ background: "linear-gradient(to bottom, #ffffffff, #f7f1f1ff)" }}
        >
            <div className="container text-center">
                <h2 className="text-center mb-4 text-dark">Habilidades Técnicas</h2>
                <div className="row justify-content-center g-4">
                    {skills.map((skill, index) => (
                        <div key={index} className="col-6 col-md-4 col-lg-2">
                            <div
                                className="bg-dark text-white p-4 rounded-4 shadow-sm h-100 transition"
                                style={{
                                    border: "1px solid rgba(255,255,255,0.05)",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                }}
                                onMouseEnter={(e) =>
                                ((e.currentTarget.style.transform = "scale(1.05)"),
                                    (e.currentTarget.style.boxShadow = "0 0 20px rgba(0,255,255,0.2)"))
                                }
                                onMouseLeave={(e) =>
                                ((e.currentTarget.style.transform = "scale(1)"),
                                    (e.currentTarget.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)"))
                                }
                            >
                                <div className="d-flex flex-column align-items-center">
                                    {skill.icon}
                                    <p className="mt-3 fw-semibold mb-0">{skill.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Habilidades;
