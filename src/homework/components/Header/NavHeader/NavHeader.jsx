import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom'
import logo from '../logo.svg'
import Home from '../Home/Home'
import NamesForSale from '../NamesForSale/NamesForSale'
import NamingContests from '../NamingContests/NamingContests'
import OtherServices from '../OtherServices/OtherServices'
import AgencyExperience from '../AgencyExperience/AgencyExperience'
import Resources from '../Resources/Resources'
import style from './NavLink.module.css'

function NavHeader () {
  return (
    <Router>
      <div className={style.navItems}>
        <div>
          <NavLink to='/home'>
            <img src={logo} className={style.logo} />
          </NavLink>
        </div>
        <div className={style.navItemCenter}>
          <NavLink to='/Names-For-Sale'>
            <h4>Names For Sale</h4>
          </NavLink>
          <NavLink to='/Naming-Contests'>
            <h4>Naming Contests</h4>
          </NavLink>
          <NavLink to='/Other-Services'>
            <h4>Other Services</h4>
          </NavLink>
          <NavLink to='/AgencyExperience'>
            <h4>AgencyExperience</h4>
          </NavLink>
          <NavLink to='/Resources'>
            <h4>Resources</h4>
          </NavLink>
        </div>
      </div>

      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/Names-For-Sale'>
          <NamesForSale />
        </Route>
        <Route path='/Naming-Contests'>
          <NamingContests />
        </Route>
        <Route path='/Other-Services'>
          <OtherServices />
        </Route>
        <Route path='/AgencyExperience'>
          <AgencyExperience />
        </Route>
        <Route path='/Resources'>
          <Resources />
        </Route>
      </Switch>
    </Router>
  )
}

export default NavHeader
