import styled from "@emotion/styled";
import BottomNav from "./BottomNav";

const Footer = () => {
  return (
    <Navigation>
      <div className="nav-bar">
        <img src="/images/logo1.png" className="logo" alt="brand logo" />
        <BottomNav className="none" />
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
    padding: 10px;
    img {
      display: block;
      @media (width < 800px) {
        display: none;
      }
    }
    .logo {
      height: 2.5em;
      will-change: filter;
      transition: filter 300ms;
    }
    .logo:hover {
      filter: drop-shadow(0 0 1em aquamarine);
    }
    @media (prefers-reduced-motion: no-preference) {
      .logo {
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

    .none {
      display: none;
    }
  }
`;
