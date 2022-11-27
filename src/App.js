import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from "./Components/Header"
import Home from './Components/Home'
import Cardapio from './Components/Cardapio'
import Api from './Components/Api'
export default function App(){
  return(
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/Cardapio">
          <Cardapio/>
        </Route>
        <Route path="/Api">
          <Api/>
        </Route>
      </Switch>
    </Router>
  )
}
