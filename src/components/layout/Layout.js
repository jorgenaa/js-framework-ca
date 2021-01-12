import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
    Route,
	NavLink,
} from 'react-router-dom';
import Home from '../views/home/Home';
import Contact from '../views/contact/Contact';
import GameDetails from '../views/gameDetails/GameDetails';
import Favourites from '../views/favourites/Favourites';

const Layout = () => {
    return (
      <Router>
            <div className="router">
                <nav className="router__nav">
                    <NavLink className="router__link router__link--hover" activeClassName="router__link--active" to="/" exact={true}>
                        Home
                    </NavLink>
                  
                    <NavLink className="router__link router__link--hover" activeClassName="router__link--active" to="/contact/">
                        Contact
                    </NavLink>
                    <NavLink className="router__link router__link--hover" activeClassName="router__link--active" to="/favourites/">
                        Favourites
                    </NavLink>
                </nav>
            </div>
          
            <div>
                <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/gameDetails/:id" component={GameDetails} />
                        <Route path="/favourites" component={Favourites} />
                </Switch>
            </div>
      </Router>
    )
}

export default Layout;