import React from "react";
import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";
import { useSelector } from "react-redux";
import { Container, Cart, img } from "./styles";

import logo from "../../assets/images/logo.png";

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);

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
