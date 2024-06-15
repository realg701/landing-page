import styled from "@emotion/styled";

const HeroSection = () => {
  return (
    <MainContainer>
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-image-sm">
          <img src="/images/hero-image-2.png" alt="hero-image" />
        </div>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="second-btn">Category</button>
        </div>
        <div className="shop">
          <p>Also Available On</p>
          <div className="brand-icons">
            <button>
              <img src="/images/metro.png" alt="metro-logo" />
            </button>
            <button href="#">
              <img src="/images/daraz.png" alt="daraz-logo" />
            </button>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/hero-image-2.png" alt="hero-image" />
      </div>
    </MainContainer>
  );
};

export default HeroSection;

const MainContainer = styled.div`
  display: flex;
  max-width: 1280px;
  margin: 80px auto;
  padding: 0 1.5em;
  @media (width < 800px) {
    margin: 30px auto;
    padding: 0 1em;
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    gap: 1em;
    h1 {
      font-size: 6em;
      font-weight: 800;
      line-height: 1em;
      margin: 0;

      @media (width < 800px) {
        font-size: 4em;
      }
    }
    p {
      max-width: 400px;
      font-weight: 600;
    }

    .hero-btn {
      display: flex;
      gap: 2em;

      .second-btn {
        background: white;
        color: #1a1a1a;
      }
      @media (prefers-color-scheme: light) {
        button {
          color: white;
          background-color: #1a1a1a;
        }
        .second-btn {
          border: 1px solid #1a1a1a;
        }
      }
    }

    .shop {
      p {
        font-weight: unset;
        font-size: 14px;
      }
    }

    .brand-icons {
      display: flex;
      gap: 1em;
      @media (width < 800px) {
        margin-bottom: 6em;
      }
      @media (prefers-color-scheme: light) {
        button {
          border: 1px solid #1a1a1a;
        }
      }

      button {
        background: white;
        display: flex;
        align-items: center;
        padding: 0.5em;

        img {
          width: 60px;
          height: 30px;
          object-fit: contain;
        }
      }
    }
  }

  .hero-image {
    img {
      width: 100%;
      min-width: 600px;
      @media (width < 800px) {
        display: none;
      }
    }
  }

  .hero-image-sm {
    img {
      width: 100%;
      max-width: 600px;
      display: none;
      @media (width < 800px) {
        display: block;
      }
    }
  }
`;
