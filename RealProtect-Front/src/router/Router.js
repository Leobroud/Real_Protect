import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Index from '../components/Index'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ='/'>
          <Index/>
        </Route>
        <Route>
          <p>Page not found</p>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

