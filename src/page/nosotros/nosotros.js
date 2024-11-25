import React, { useState } from 'react';
import './nosotros.css';
import logo from '../../assets/logo.jpg'; // Asegúrate de que esta ruta sea correcta

const Nosotros = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const menuItems = [
        'Nosotros', 'Servicio', 'Logística', 'Calidad', 'Contáctanos', 'Bolsa de Trabajo'
    ];

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % menuItems.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + menuItems.length) % menuItems.length);
    };

    return (
        <div className="contenedor-nosotros">
            <div className="bienvenida">
                {/* Logo a la izquierda */}
                <div className="logo">
                    <img src={logo} alt="Logo CorteAcero" />
                </div>

                {/* Menú deslizable con flechas */}
                <div className="menu">
                    <button className="arrow prev" onClick={goToPrev}>←</button>
                    <span className="menu-item">{menuItems[currentIndex]}</span>
                    <button className="arrow next" onClick={goToNext}>→</button>
                </div>
            </div>

            {/* Barra inferior con elementos alineados */}
            <div className="barra-inferior">
                <div className="opciones">
                    <span>Menú</span>
                    <span>Contáctanos</span>
                    <span>Síguenos</span>
                </div>
                <div className="copyright">
                    Copyright ©2024 CorteAcero. Todos los Derechos Reservados.
                </div>
            </div>
        </div>
    );
};

export default Nosotros;
