import React from "react";
import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";
import { connect } from "react-redux";
import { Container, Cart, img } from "./styles";

import logo from "../../assets/images/logo.png";

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <div class="Header">
          <img src={logo} alt="logo" />
        </div>
      </Link>

      <Cart to="/Cart">
        <div>
          <strong>Meu Carrinho</strong>
          <strong>{cartSize} Itens</strong>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}
export default connect(state => ({
  cartSize: state.cart.length
}))(Header);
