import { Box } from "@mui/system";
import { NavBar } from "./../components/NavBar.jsx";
import { SideBar } from "../components/SideBar.jsx";
import { Toolbar } from "@mui/material";

const drawerWith = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWith={drawerWith} />

      <SideBar drawerWith={drawerWith} />

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}>

      <Toolbar />

        {children}
      </Box>
    </Box>
  );
};
