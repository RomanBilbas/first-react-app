import { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Link,
  useHistory,
  useRouteMatch
} from 'react-router-dom'
import User from './component/User'
import Counter from './component/Counter'

const navLinkStyle = isActive => ({ color: isActive ? 'green' : 'blue' })

function App () {
  return (
    <Router>
      <nav>
        <ul>
          ``
          <li>
            <NavLink style={navLinkStyle} to='/home'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyle} to='/about'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyle} to='/component'>
              Component
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyle} to='/contacts'>
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/component'>
          <Component />
        </Route>
        <Route path='/contacts'>
          <Contacts />
        </Route>
        <Route path='/*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

function Home () {
  return <div>Home</div>
}

function Component () {
  const { url, path } = useRouteMatch()
  return (
    <div>
      <Link to={`${url}/counter`}>Counter</Link>
      <Link to={`${url}/user`}>User</Link>
      <Switch>
        <Route path={`${path}/counter`}>
          <Counter />
        </Route>
        <Route path={`${path}/user`}>
          <User />
        </Route>
      </Switch>
    </div>
  )
}
function About () {
  return <div>About</div>
}

function Contacts () {
  return <div>Contacts</div>
}

function NotFound () {
  const history = useHistory()
  useEffect(() => {
    const id = setTimeout(() => {
      history.push('/home')
    }, 5000)
    return () => {
      clearTimeout(id)
    }
  })
  return <div>NotFound</div>
}
