import './App.css';
import {HashRouter,  Routes, Route} from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import AboutUs from './components/pages/AboutUs';
import CreateRequest from './components/pages/CreateRequest';
import PrevWorks from './components/pages/PrevWorks';
import ForSale from './components/pages/ForSale';
import Home from './components/pages/Home';

function App() {
  return (

    <HashRouter>

      <div>
        <TopNavbar/>

        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/About' element = {<AboutUs />} />
          <Route path='/CreateRequest' element = {<CreateRequest />} />
          <Route path='/ForSale' element = {<ForSale />} />
          <Route path='/PrevWorks' element = {<PrevWorks />} />
        </Routes>

      </div>

    </HashRouter> 
  );
}

export default App;
