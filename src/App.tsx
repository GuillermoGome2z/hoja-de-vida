import React from "react";

// Componentes
import Header from "./components/Header";
import Perfil from "./components/Perfil";
import Formacion from "./components/Formacion";
import Experiencia from "./components/Experiencia";
import Habilidades from "./components/Habilidades";
import Contacto from "./components/Contacto";
import Repositorio from "./components/Repositorio"; // Asegúrate de tenerlo creado

const App: React.FC = () => {
  return (
    <>
      {/* Encabezado */}
      <Header />

      {/* Contenido principal */}
      <Perfil />
      <Formacion />
      <Experiencia />
      <Habilidades />
      <Repositorio />
      <Contacto />
    </>
  );
};

export default App;
