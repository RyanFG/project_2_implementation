import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Cards from './ImageCards';
import { FormLabel } from 'react-bootstrap';

function FacetedSearch({typeWork, size, price, works}){

    const [selectedSize, setSelectedSize] = useState(size);
    const [selectedPrice, setSelectedPrice] = useState(price);
    const [selectedType, setSelectedType] = useState(typeWork);

    function handlePriceChange(event){

        const value = event.target.value;

        const isChecked = event.target.checked;

        setSelectedPrice((selectedPrice) => {
            const updatedPrices =isChecked? [...selectedPrice, value] : selectedPrice.filter((work) => work !== value);
            
            setSelectedPrice(updatedPrices);

            return updatedPrices;
        });

    };

    function handleSizeChange(event){

        const value = event.target.value;

        const isChecked = event.target.checked;

        setSelectedSize((selectedSize) => {
            const updatedSizes =isChecked? [...selectedSize, value] : selectedSize.filter((work) => work !== value);
            
            setSelectedPrice(updatedSizes);

            return updatedSizes;
        });

    };
    

    function handleTypeChange(event){
        
        const value = event.target.value;

        const isChecked = event.target.checked;

        setSelectedType((selectedType) => {
            const updatedTypes =isChecked? [...selectedType, value] : selectedType.filter((work) => work !== value);
            
            setSelectedType(updatedTypes);

            return updatedTypes;
        });

    };

    

    return(
        <Form>
            <Form.Group>
                <FormLabel>Type Of Work</FormLabel>
                {typeWork.map((tWork) =>
                <Form.Check type="checkbox" value={typeWork} id={typeWork} onChange={handleTypeChange} checked={selectedType.includes(tWork)}/>
                )}
            </Form.Group>
            <Form.Group>
                <FormLabel>Size</FormLabel>
                {size.map((sWork) =>
                <Form.Check type="checkbox" value={size} id={size} onChange={handleSizeChange} checked={selectedSize.includes(sWork)}/>
                )}
            </Form.Group>
            <Form.Group>
                <FormLabel>Price</FormLabel>
                {price.map((pWork) =>
                <Form.Check type="checkbox" value={price} id={price} onChange={handlePriceChange} checked={selectedPrice.includes(pWork)}/>
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
