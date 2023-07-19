import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import ImageCard from './ImageCards';

function FacetedSearch({typeWorks, works}){

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTypeWorks, setSelectedTypeWorks] = useState(typeWorks);
    const [selectedWorks, setSelectedWorks] = useState(works);

    

    function handleTypeChange(event){
        
        const value = event.target.value;

        const isChecked = event.target.checked;

        setSelectedTypeWorks((selectedTypeWorks) => {
            const updatedTypeWorks =isChecked? [...selectedTypeWorks, value] : selectedTypeWorks.filter((tWork) => tWork !== value);
            
            const updatedWorks = handleSearch(searchTerm, updatedTypeWorks);

            setSelectedWorks(updatedTypeWorks);

            return updatedWorks;
        });

    };

    function handleSearch(searchTerm, selectedWorks){


        const newWorks = works.filter((work) =>
        
        work.typeWork.includes(searchTerm) && (selectedWorks.includes(work.typeWork))
        
        );

        return newWorks;
    };

    return(

        <Form>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                {typeWorks.map((tWork) =>
                <Form.Check type="checkbox" label = {tWork} value={tWork} id={tWork} onChange={handleTypeChange} checked={selectedTypeWorks.includes(tWork)}/>
                )}
            </Form.Group>
            

            
            <div>    
                {works.map((work) =>
                <div key = {work.id} className='col-md-6'>
                <ImageCard id={work.key} image={work.image} title={work.title} desc={work.desc} type={work.typeWork} size={work.size} price={work.price}/>
                {/* <ImageCard id = {'test'} title = {'testtitle'} type = {'testtype'} desc = {'test'} size = {'testt'} price = {'price'} /> */}
                </div>
                )}
            </div>
            
            
        </Form>

    );
    

}
export default FacetedSearch;
