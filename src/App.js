import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Enamad from "../src/enamad.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import Modal from "./components/Modal";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <footer
          className="farsi text-right p-4"
          style={{ background: "var(--mainBlue)", color: "white" }}
          dir="rtl"
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={Enamad} alt="enamad" width={100} />
          </div>
          <p>تماس با ما</p>
          <p>آدرس: خیابان آزادی، نرسیده به خیابان بهبودی، پلاک ۱۵۴</p>
          <p>تلفن: ۰۲۱۶۶۵۴۲۳۸۲۲</p>
          <p className="text-center" style={{ fontSize: "10px" }}>
            تمامی حقوق محفوط است
          </p>
        </footer>
        <Modal />
      </React.Fragment>
    );
  }
}
