import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Nav, HeaderLogo, NavMenu, NavButton } from "../../styled-components/HeaderStyles";
import { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <Nav>
        <HeaderLogo>
          <Link to="/" onClick={closeNav}>
            ANNA SÆTHRE
          </Link>
        </HeaderLogo>
        <NavMenu className={isNavOpen ? 'responsive' : ''}>
          <Link to="/" onClick={closeNav}>
            Home
          </Link>
          <Link to="/about" onClick={closeNav}>
            About me
          </Link>
          <Link to="/contact" onClick={closeNav}>
            Contact
          </Link>
          <NavButton onClick={toggleNav}>
            {isNavOpen ? <FaTimes /> : <FaBars />}
          </NavButton>
        </NavMenu>
        <NavButton onClick={toggleNav}>
          {isNavOpen ? <FaTimes /> : <FaBars />}
        </NavButton>
      </Nav>
    </>
  );
};

export default Header;
