import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import AboutUs from './components/pages/AboutUs';
import CreateRequest from './components/pages/CreateRequest';
import PrevWorks from './components/pages/PrevWorks';
import ForSale from './components/pages/ForSale';
import Home from './components/pages/Home';
import Tips from './components/pages/Tips';
import Month from './components/pages/Month';
import French from './components/pages/FrenchRequest';

function App() {
  return (

    <BrowserRouter>

      <div>
        <TopNavbar/>

        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/About" element = {<AboutUs/>} />
          <Route path='/CreateRequest' element = {<CreateRequest/>} />
          <Route path='/ForSale' element = {<ForSale/>} />
          <Route path='/PrevWorks' element = {<PrevWorks/>} />
          <Route path='/Tips' element = {<Tips/>} />
          <Route path='/Month' element = {<Month/>} />
          <Route path='/FrenchRequest' element = {<French/>} />
        </Routes>

      </div>

    </BrowserRouter> 
  );
}

export default App;
