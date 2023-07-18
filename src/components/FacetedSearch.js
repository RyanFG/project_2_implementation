import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Cards from './ImageCards';

function FacetedSearch({typeWorks, works}){


    const [selectedWorks, setSelectedWorks] = useState(works);

    

    function handleTypeChange(event){
        
        const value = event.target.value;

        const isChecked = event.target.checked;

        setSelectedWorks((selectedWorks) => {
            const updatedWorks =isChecked? [...selectedWorks, value] : selectedWorks.filter((typeWork) => typeWork !== value);
            
            setSelectedWorks(updatedWorks);

            return updatedWorks;
        });

    };

    

    return(
        <Form>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                {typeWorks.map((tWork) =>
                <Form.Check type="checkbox" value={typeWorks} id={typeWorks} onChange={handleTypeChange} checked={selectedWorks.includes(tWork)}/>
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
