import styled from "@emotion/styled";

const HeroSection = () => {
  return (
    <Main>
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
              <img src="/images/metro.png" alt="" />
            </button>
            <a href="#">
              <img src="/images/daraz.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/hero-image-2.png" alt="" />
      </div>
    </Main>
  );
};

export default HeroSection;

const Main = styled.div`
  margin-top: 70px;
`;
