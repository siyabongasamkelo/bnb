import React from "react";
import { HeaderWrapper, Links } from "./Header.styled";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderWrapper>
      <h3>Duswa</h3>
      <Links>
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>About Us</Link>
          </li>
          <li>
            <Link>Our Mission</Link>
          </li>
          <li>
            <Link>Reviews</Link>
          </li>
        </ul>
      </Links>

      <button></button>
    </HeaderWrapper>
  );
};

export default Header;
