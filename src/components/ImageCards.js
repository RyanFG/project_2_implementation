import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ImageCard({image, title, desc, price, size, typeWork, visible = true, forPurchase = "Purchase"}) {

  return (
    <div className='bottomPad'>
    <Card style={{ width: '35%', height:'30%' , display:{visible}}}>
      <Card.Img width="30%" height="285px" variant="top" src={image}/>
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
        <Button href="/Success" variant="success">{forPurchase}</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default ImageCard;