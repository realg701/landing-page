import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";

const NavLinks = () => {
  return (
    <>
      <ul className="links">
        <li>
          <Link to={"/products"}>Products</Link>
        </li>
        <li>
          <Link to={"/category"}>Category</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </>
  );
};

const Header = () => {
  return (
    <Navigation>
      <div className="nav-bar">
        <div>
          <Link to={"/"} className="brand-logo">
            <img src="/images/logo1.png" className="logo" alt="brand logo" />
            <h1>Shoes</h1>
          </Link>
        </div>
        <div className="nav-links">
          <NavLinks />
        </div>
        {/* <NavLinks /> */}
        <div className="nav-links-mobile"></div>
        <div className="login">
          <LoginModal />
        </div>
      </div>
    </Navigation>
  );
};

export default Header;

const Navigation = styled.div`
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  background-color: #888;

  @media (width < 800px) {
    position: relative;
  }

  .nav-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-height: 70px;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1.5em;

    .brand-logo {
      display: flex;
      align-items: center;
    }

    .logo {
      margin-right: 8px;
      height: 2.5em;
      will-change: filter;
      transition: filter 300ms;
    }
    .logo:hover {
      filter: drop-shadow(0 0 1em aquamarine);
    }
    @media (prefers-reduced-motion: no-preference) {
      a .logo {
        animation: logo-spin infinite 20s linear;
      }
    }
    @keyframes logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .nav-links {
      ul {
        display: flex;
        padding: 0;
        gap: 1.5em;
        list-style: none;
      }
      @media (width < 800px) {
        display: none;
      }
    }
  }
`;
