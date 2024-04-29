import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import InventoryIcon from "@mui/icons-material/Inventory";
import HelpIcon from "@mui/icons-material/Help";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { useNavigate } from "react-router";
import styled from "styled-components";

export default function BottomNav() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue == "home") navigate("/");
    if (newValue == "products") navigate("/products");
    if (newValue == "category") navigate("/category");
    if (newValue == "about") navigate("/about");
    if (newValue == "contact") navigate("/contact");
  };

  const style = {
    width: `100%`,
    bgcolor: "unset",
  };

  return (
    <Container>
      <BottomNavigation sx={style} value={value} onChange={handleChange}>
        <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="Products"
          value="products"
          icon={<InventoryIcon />}
        />
        <BottomNavigationAction
          label="Category"
          value="category"
          icon={<CategoryIcon />}
        />
        <BottomNavigationAction
          label="About"
          value="about"
          icon={<HelpIcon />}
        />
        <BottomNavigationAction
          label="Contact"
          value="contact"
          icon={<ContactMailIcon />}
        />
      </BottomNavigation>
    </Container>
  );
}

const Container = styled.div`
  display: none;
  @media (width < 800px) {
    display: block;
  }
  .css-1bjk3jo-MuiButtonBase-root-MuiBottomNavigationAction-root.Mui-selected {
    color: #e4293e;
  }
  button:hover {
    filter: drop-shadow(0 0 1em #e4293e);
    border-color: #e4293e;
  }
`;
