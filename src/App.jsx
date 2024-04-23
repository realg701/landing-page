import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "@emotion/styled";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Category from "./pages/Category";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Body>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/category" element={<Category />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </Body>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

const Body = styled.div`
  padding: 30px 0;
  @media (0 < width < 600px) {
    padding: 0;
  }
`;
