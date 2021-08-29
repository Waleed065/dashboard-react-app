import React from "react";
import { styled } from "@material-ui/core/styles";
import { useState } from "react";
import DashboardNavbar from '../components/Navbar';
import DashboardSidebar from '../components/Sidebar';
import { Outlet } from "react-router-dom";
import { navBarHeightMd, navBarHeightSm } from "../constants/styles";


export default function DashboardLayout() {
  const [open, setOpen] = useState(false);

  return (
    <RootStyle>
      <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
      <DashboardSidebar
        isOpenSidebar={open}
        onCloseSidebar={() => setOpen(false)}
      />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
}


const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const MainStyle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  position: 'relative',
  paddingTop: navBarHeightSm,
  [theme.breakpoints.up("lg")]: {
    paddingTop: navBarHeightMd,
  },
}));
