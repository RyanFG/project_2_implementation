import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Cards from './ImageCards';
import { FormLabel } from 'react-bootstrap';

function FacetedSearch({typeWork, size, price, works}){

    const [selectedSize, setSelectedSize] = useState(works);
    const [selectedPrice, setSelectedPrice] = useState(works);
    const [selectedType, setSelectedTYpe] = useState(works);

    function handlePriceChange(){

    }

    function handleSizeChange(){

    }

    function handleTypeChange(){
        
    }

    return(
        <Form>
            <Form.Group>
                <FormLabel>Type Of Work</FormLabel>
                {typeWork.map((tWork) =>
                <Form.Check type="checkbox" value={typeWork} id={typeWork} onChange={handleTypeChange} checked={selectedWorks.includes(tWork)}/>
                )}
            </Form.Group>
            <Form.Group>
                <FormLabel>Size</FormLabel>
                {size.map((sWork) =>
                <Form.Check type="checkbox" value={size} id={size} onChange={handleSizeChange} checked={selectedWorks.includes(sWork)}/>
                )}
            </Form.Group>
            <Form.Group>
                <FormLabel>Price</FormLabel>
                {price.map((pWork) =>
                <Form.Check type="checkbox" value={price} id={price} onChange={handlePriceChange} checked={selectedWorks.includes(pWork)}/>
                )}
            </Form.Group>

            <div>
                {works.map((work) =>
                <div key={work.id} className='col-md-6'>
                <Cards id={work.id} image={work.image} title={work.title} desc={work.desc} type={work.typeWork} size={work.size} price={work.price}/>
                </div>
                )}
            </div>
        </Form>
    );

}
export default FacetedSearch;
