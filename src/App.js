import './App.css';
import {BrowserRouter, Switch, Route, Link, HashRouter,} from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import AboutUs from './components/pages/AboutUs';
import CreateRequest from './components/pages/CreateRequest';
import PrevWorks from './components/pages/PrevWorks';
import ForSale from './components/pages/ForSale';
import Home from './components/pages/Home';

function App() {
  return (

    <BrowserRouter>

<HashRouter basename="/">
        <nav>
          <ul>
            <li>
              <Link to="/">Whittle Creations</Link>
            </li>
            <li>
              <Link to="/AboutUs">About Us</Link>
            </li>
            <li>
              <Link to="/CreateRequest">Create Request</Link>
            </li>
            <li>
              <Link to="/PrevWorks">Previous Works</Link>
            </li>
            <li>
              <Link to="/For Sale">For Sale</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/AboutUs">
            <AboutUs />
          </Route>
          <Route path="/CreateRequest">
            <CreateRequest />
          </Route>
          <Route path="/PrevWorks">
            <PrevWorks />
          </Route>
          <Route path="/ForSale">
            <ForSale />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </HashRouter>
        <TopNavbar/>


    </BrowserRouter> 
  );
}

export default App;
