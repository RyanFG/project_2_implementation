import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ImageCard(image, title, desc, price, size, typeWork, visible) {
  return (
    <Card style={{ width: '18rem', display:{visible}}}>
      <Card.Img variant="top" src={image}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {typeWork}
        </Card.Text>
        <Card.Text>
          {desc}
        </Card.Text>
        <Card.Text>
          {size}
        </Card.Text>
        <Card.Text>
          {price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ImageCard;