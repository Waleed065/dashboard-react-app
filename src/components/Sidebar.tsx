import { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

import { styled } from "@material-ui/core/styles";
import {
  Box,
  Link,
  Button,
  Drawer,
  Typography,
  Avatar,
  Stack,
} from "@material-ui/core";

import Logo from "./Logo";
import NavSection from "./NavSection";
import MHidden from "./MHidden";

import sidebarConfig from "./SidebarConfig";

import { staticPaths } from "../constants";
import {
  defaultSpaceMd,
  defaultSpaceSm,
  navBarHeightMd,
  navBarHeightSm,
} from "../constants/styles";

const {
  dashboardRoute: { dashboardHomeRoute },
} = staticPaths;

// ----------------------------------------------------------------------
const account = {
  displayName: "Jaydon Frankie",
  email: "demo@minimals.cc",
  photoURL: "/static/avatar.jpg",
};

const DRAWER_WIDTH = 280;

// ----------------------------------------------------------------------

interface schema {
  isOpenSidebar: boolean;
  onCloseSidebar: () => void;
}
export default function DashboardSidebar({
  isOpenSidebar,
  onCloseSidebar,
}: schema) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line
  }, [pathname]);

  const renderContent = (
    <StyledContent>
      <StyledBox>
        <Box
          component={RouterLink}
          to={dashboardHomeRoute}
          sx={{ display: "inline-flex" }}
        >
          <Logo />
        </Box>
      </StyledBox>

      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none" component={RouterLink} to="#">
          <AccountStyle>
            <Avatar src={account.photoURL} alt="photoURL" />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: "text.primary" }}>
                {account.displayName}
              </Typography>
            </Box>
          </AccountStyle>
        </Link>
      </Box>

      <NavSection navConfig={sidebarConfig} />

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
        <Stack
          alignItems="center"
          spacing={3}
          sx={{
            p: 2.5,
            pt: 5,
            borderRadius: 2,
            position: "relative",
            bgcolor: "grey.200",
          }}
        >
          <Box
            component="img"
            src="/static/illustrations/illustration_avatar.png"
            sx={{ width: 100, position: "absolute", top: -50 }}
          />

          <Box sx={{ textAlign: "center" }}>
            <Typography gutterBottom variant="h6">
              Get more?
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              From only $69
            </Typography>
          </Box>

          <Button
            fullWidth
            href="https://material-ui.com/store/items/minimal-dashboard/"
            target="_blank"
            variant="contained"
          >
            Upgrade to Pro
          </Button>
        </Stack>
      </Box>
    </StyledContent>
  );

  return (
    <RootStyle>
      <MHidden width="lgUp">
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>

      <MHidden width="lgDown">
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: "background.default",
            },
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>
    </RootStyle>
  );
}

const StyledContent = styled("div")({
  overflowX: "hidden",
  overflowY: "auto",
});

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

const AccountStyle = styled("div")(({ theme }: any) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, defaultSpaceMd),
  borderRadius: theme.shape.borderRadiusSm,
  backgroundColor: theme.palette.grey[200],
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2.5, defaultSpaceSm),
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  height: navBarHeightMd,
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, defaultSpaceMd),
  [theme.breakpoints.down("sm")]: {
    height: navBarHeightSm,
    padding: theme.spacing(0, defaultSpaceSm),
  },
}));
