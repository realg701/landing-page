import styled from "@emotion/styled";

const HeroSection = () => {
  return (
    <MainContainer>
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
          quisquam odio hic! Delectus quasi repellat distinctio architecto ullam
          ipsa, mollitia vero numquam sunt minima adipisci, ipsam, molestiae
          totam ad nobis.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button>Category</button>
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
  margin: 70px auto;
  height: calc(100vh - 70);

  h1 {
    font-size: 6em;
    font-weight: 800;
    line-height: 1em;
  }

  .brand-icons {
    display: flex;
    button {
      display: flex;
      align-items: center;
      margin: 5px;
      padding: 0.5em 1em;

      img {
        width: 80px;
        height: 40px;
        object-fit: contain;
      }
    }
  }
`;
