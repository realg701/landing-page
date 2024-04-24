import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import BottomNav from "./BottomNav";

const Footer = () => {
  return (
    <Navigation>
      <div className="nav-bar">
        <BottomNav />
      </div>
    </Navigation>
  );
};

export default Footer;

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 3em;
  padding: 10px 0 5px 0;
  z-index: 10;
  bottom: 0;
  background-color: #888;

  .nav-bar {
    .logo {
      height: 3em;
      will-change: filter;
      transition: filter 300ms;

      @media (0 < width < 600px) {
        height: 2em;
      }
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
  }
`;
