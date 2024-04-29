import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "@emotion/styled";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Category from "./pages/Category";
import About from "./pages/About";
import Contact from "./pages/Contact";
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
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
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
