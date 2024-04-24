import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import CategoryIcon from "@mui/icons-material/Category";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InventoryIcon from "@mui/icons-material/Inventory";
import HelpIcon from "@mui/icons-material/Help";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { useNavigate } from "react-router";

export default function BottomNav() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue == "home") navigate("/");
    if (newValue == "products") navigate("/products");
    if (newValue == "category") navigate("/category");
    if (newValue == "aboutus") navigate("/aboutus");
    if (newValue == "contactus") navigate("/contactus");
  };

  const style = {
    width: `100%`,
    bgcolor: "unset",
  };

  return (
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
        value="aboutus"
        icon={<HelpIcon />}
      />
      <BottomNavigationAction
        label="Contact"
        value="contactus"
        icon={<ContactMailIcon />}
      />
    </BottomNavigation>
  );
}
