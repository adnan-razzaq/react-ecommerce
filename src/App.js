import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* Pages */
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Error from "./pages/Error";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
/* Components */
import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/login" component={Login} />
        <Route path="/products" component={Products} />
        <Route path="/login" component={Login} />
        <Route path="/productdetails/:id" children={<ProductDetails />} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
}
