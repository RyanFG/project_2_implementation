import './App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import AboutUs from './components/pages/AboutUs';
import CreateRequest from './components/pages/CreateRequest';
import PrevWorks from './components/pages/PrevWorks';
import ForSale from './components/pages/ForSale';
import Home from './components/pages/Home';

function App() {
  return (

    <Router>

      <div>
        <TopNavbar/>

        <Routes>
          <Route path='/Home' element = {<Home />} />
          <Route path='/About' element = {<AboutUs />} />
          <Route path='/CreateRequest' element = {<CreateRequest />} />
          <Route path='/ForSale' element = {<ForSale />} />
          <Route path='/PrevWorks' element = {<PrevWorks />} />
        </Routes>

      </div>

    </Router> 
  );
}

export default App;
