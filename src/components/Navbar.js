import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import { domainToASCII } from "url";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

//1.15.00 de kaldım
export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 farsi">
        <Link to="/">
          <img src={logo} width={50} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              محصولات
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
              سبد خرید
            </span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}
const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1rem;
    text-transform: capitalize;
  }
`;
