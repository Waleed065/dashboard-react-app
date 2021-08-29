import { Icon } from "@iconify/react";
import menu2Fill from "@iconify/icons-eva/menu-2-fill";
// material
import { alpha, styled } from "@material-ui/core/styles";
import { Box, Stack, AppBar, Toolbar, IconButton } from "@material-ui/core";
// components

//
import Searchbar from "./Searchbar";
import AccountPopover from "./AccountPopover";
import NotificationsPopover from "./NotificationsPopover";
import MHidden from "./MHidden";
import { DRAWER_WIDTH, navBarHeightMd, navBarHeightSm } from "../constants/styles";


// ----------------------------------------------------------------------

interface schema {
  onOpenSidebar: () => void;
}
export default function DashboardNavbar({ onOpenSidebar }: schema) {
  return (
    <RootStyle>
      <ToolbarStyle>
        <MHidden width="lgUp">
          <IconButton
            onClick={onOpenSidebar}
            sx={{ mr: 1, color: "text.primary" }}
          >
            <Icon icon={menu2Fill} />
          </IconButton>
        </MHidden>

        <Searchbar />
        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{ xs: 0.5, sm: 1.5 }}
        >
          <NotificationsPopover />
          <AccountPopover />
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
}

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)",
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up("lg")]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
  },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: navBarHeightSm,
  [theme.breakpoints.up("lg")]: {
    height: navBarHeightMd,
  },
}));
