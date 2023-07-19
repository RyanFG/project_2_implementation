import Card from 'react-bootstrap/Card';

function ImageCard({image, title, desc, price, size, typeWork, visible = true}) {

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
          Size: {size}
        </Card.Text>
        <Card.Text>
          Price: {price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ImageCard;