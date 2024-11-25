import React from 'react';
import './home.css';
import logo from '../../assets/logo.jpg'; // Asegúrate de que esta ruta sea correcta

const Home = () => {
    return (
        <div className="contenedor-nosotros">
            <div className="bienvenida">
                {/* Logo a la izquierda */}
                <div className="logo">
                    <img src={logo} alt="Logo CorteAcero" />
                </div>

                {/* Menú horizontal con opciones */}
                <div className="menu">
                    <span className="menu-item">Nosotros</span>
                    <span className="menu-item">Servicio</span>
                    <span className="menu-item">Logística</span>
                    <span className="menu-item">Calidad</span>
                    <span className="menu-item">Contáctanos</span>
                    <span className="menu-item">Bolsa de Trabajo</span>
                </div>
            </div>

            {/* Barra inferior con elementos alineados */}
            <div className="barra-inferior">
                <div className="opciones">
                    {/* Opciones de navegación en la barra inferior */}
                    <span>Menú</span>
                    <span>Contáctanos</span>
                    <span>Síguenos</span>
                </div>
                <div className="copyright">
                    {/* Texto de derechos de autor */}
                    Copyright ©2024 CorteAcero. Todos los Derechos Reservados.
                </div>
            </div>
        </div>
    );
};

export default Home;
