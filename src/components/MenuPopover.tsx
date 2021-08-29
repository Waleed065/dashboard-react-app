import { Popover } from "@material-ui/core";
import { alpha, styled } from "@material-ui/core/styles";

// ----------------------------------------------------------------------

const ArrowStyle = styled("span")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    top: -7,
    zIndex: 1,
    width: 12,
    right: 20,
    height: 12,
    content: "''",
    position: "absolute",
    borderRadius: "0 0 4px 0",
    transform: "rotate(-135deg)",
    background: theme.palette.background.paper,
    borderRight: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
    borderBottom: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
  },
}));

// ----------------------------------------------------------------------

interface schema {
  children: any;
  sx?: any;
  open: boolean;
  onClose: () => void;
  anchorEl: HTMLButtonElement | null
}
export default function MenuPopover({ children, sx, open, onClose, anchorEl, ...rest }: schema) {
  return (
    <Popover
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      PaperProps={{
        sx: {
          mt: 1.5,
          ml: 0.5,
          overflow: "inherit",
          boxShadow: (theme: any) => theme.customShadows.z20,
          border: (theme) => `solid 1px ${theme.palette.grey["A100"]}`,
          width: 200,
          ...sx,
        },
      }}
      {...rest}
    >
      <ArrowStyle className="arrow" />

      {children}
    </Popover>
  );
}
