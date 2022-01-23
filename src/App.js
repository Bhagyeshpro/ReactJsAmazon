import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
 
function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/checkout">
              <Header/>
              <h1>checkout</h1>
              <Checkout/>
          </Route>
          <Route path="/Login">
              <h1>Login</h1>
          </Route>
          <Route path="/">
              <Header/>
              <Home/>
          </Route>
        </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
