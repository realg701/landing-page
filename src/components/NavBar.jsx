import styled from "@emotion/styled";

const NavBar = () => {
  return (
    <Navigation>
      <div className="nav-bar">
        <div>
          <a className="brand-logo" href="#">
            <img src="/images/logo1.png" className="logo" alt="brand logo" />
            <h1>Shoes</h1>
          </a>
        </div>
        <ul className="links">
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Category</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="login">
          <button>Login</button>
        </div>
      </div>
    </Navigation>
  );
};

export default NavBar;

const Navigation = styled.div`
  background-color: #888;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;

  .nav-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-height: 70px;
    max-width: 1280px;
    padding: 0 1.5em;
    margin: 0 auto;

    .brand-logo {
      display: flex;
      gap: 8px;
      align-items: center;

      h1 {
        font-size: 32px;
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

    @keyframes logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    @media (prefers-reduced-motion: no-preference) {
      a .logo {
        animation: logo-spin infinite 20s linear;
      }
    }

    ul {
      display: flex;
      padding: 0;
      gap: 1.5em;
      list-style: none;
    }
  }
`;
