// Importar el componente Slider de la librería react-slick
import Slider from "react-slick";

// Importar los estilos predeterminados de react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imagenuno from "../assets/foto1.jpeg"
import imagendos from "../assets/foto2.jpeg"
import imagentres from "../assets/foto3.jpeg"
import imagencuatro from "../assets/foto4.jpeg"
import imagencinco from "../assets/foto5.jpeg"


// Definir el componente funcional Carousel
const Carousel = () => {
  // Configuración del carrusel utilizando la librería react-slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  // Renderizar el componente Carousel
  return (
    <>
      <div>
        <br />
        <br />
      </div>
      {/* Utilizar el componente Slider con la configuración */}
      <Slider {...settings} className="mx-auto max-w-7xl h-auto  ">
        {/* Cada elemento dentro del Slider representa un slide del carrusel */}

        <img
          src={imagencinco}
          alt="Slide 1"
          className="rounded-xl "
        />

        <img
          src={imagencuatro}
          alt="Slide 2"
          className="rounded-xl"
        />

        <img
          src={imagentres}
          alt="Slide 3"
          className="rounded-xl "
        />

        <img
          src={imagendos}
          alt="Slide 4"
          className=" rounded-xl"
        />
        <img
          src={imagenuno}
          alt="Slide 5"
          className=" rounded-xl"
        />
      </Slider>
    </>
  );
};

// Exportar el componente Carousel
export default Carousel;
