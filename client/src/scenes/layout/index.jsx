import { Box } from "@mui/material";
import Navber from "components/Navber";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box width="100%" height="100%">
      <Box>
        <Navber />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
