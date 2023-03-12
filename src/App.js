import AppBar from "./Components/AppBar/AppBar";
import Products from "./Pages/Products/Products";
import { BrowserRouter as Router,Link, Switch, Route } from "react-router-dom";
import "./App.css";
import Cart from "./Pages/Cart/Cart";



function App() {


  return (
    <Router>
        <div className="appContainer">
            <AppBar />
            <div style={{padding:"4rem 2rem"}}>
            <Switch>
               <Route path="/" exact component={Products} />
               <Route path="/products" exact component={Products} />
               <Route path="/cart" exact component={Cart} />
            </Switch>
            </div>
           
        </div>
     </Router>
  );
}

export default App;
