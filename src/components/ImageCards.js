import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ImageCard({image, title, desc, price, size, typeWork, visible = true, forPurchase = "Purchase"}) {

  return (
    <div className='bottomPad'>
    <Card style={{ width: '40%', display:{visible}}}>
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
        <Button variant="success">{forPurchase}</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default ImageCard;