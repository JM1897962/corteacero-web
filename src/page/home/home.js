import React from 'react';
import './home.css';
import logo from '../../assets/logo.jpg'; // Asegúrate de que esta ruta sea correcta
import Slider from "react-slick"; // Importar el componente Slider
import imagen1 from '../../assets/imagen1.jpg';
import imagen2 from '../../assets/imagen2.jpg';
import imagen3 from '../../assets/imagen3.jpg';

const Home = () => {
    // Configuración del carrusel
    const settings = {
        dots: true, // Mostrar puntos de navegación
        infinite: true, // Carrusel infinito
        speed: 500, // Velocidad de transición
        slidesToShow: 1, // Mostrar un slide a la vez
        slidesToScroll: 1, // Desplazar un slide a la vez
        autoplay: true, // Activar autoplay
        autoplaySpeed: 3000, // Velocidad de autoplay
    };

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

            {/* Carrusel de imágenes */}
            <div className="carrusel">
                <Slider {...settings}>
                    <div>
                        <img src={imagen1} alt="Imagen 1" />
                    </div>
                    <div>
                        <img src={imagen2} alt="Imagen 2" />
                    </div>
                    <div>
                        <img src={imagen3} alt="Imagen 3" />
                    </div>
                    {/* Agrega más imágenes según sea necesario */}
                </Slider>
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

export default Home;
