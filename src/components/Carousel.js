import Carousel from 'react-bootstrap/Carousel';
import wood_bird from './pages/Images/Wooden_Bird.webp';
import runnin_boar from './pages/Images/Runnin_Boar.jpg';
import nature_elephant from './pages/Images/Natures_Elephant.webp';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="light" interval={7500}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={825}
          src={wood_bird}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 class = "text-light bg-dark">Wooden Bird</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={825}
          src={nature_elephant}
          alt="Second slide"
        />
        <Carousel.Caption>
            <h3 class="text-light bg-dark">Natures Elephant</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={825}
          src={runnin_boar}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 class="text-light bg-dark">Runnin Hog</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;