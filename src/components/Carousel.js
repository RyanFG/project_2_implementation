import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="light" interval={7500}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={725}
          src="https://cdn.shopify.com/s/files/1/0645/8877/5646/files/bird.webp?v=1682941344"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 class = "text-light bg-dark">Wooden Bird</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={725}
          src="https://www.carvedculture.com/cdn/shop/articles/Wood_carving_for_beginners_course_900x.jpg-2-2_900x_66cce877-2c62-4c9e-ae31-bf4e3ea22359.webp?v=1672520371"
          alt="Second slide"
        />
        <Carousel.Caption>
            <h3 class="text-light bg-dark">Natures Elephant</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={725}
          src="https://olmarthouse.com/wp-content/uploads/Forest-Boar4.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 class="text-light bg-dark">Running Hog</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;