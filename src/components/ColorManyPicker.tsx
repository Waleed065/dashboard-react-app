import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import checkmarkFill from "@iconify/icons-eva/checkmark-fill";
// material
import { Box, Checkbox } from "@material-ui/core";

// ----------------------------------------------------------------------

IconColor.propTypes = {
  sx: PropTypes.object,
};

interface IconColorSchema {
  sx?: any;
}
function IconColor({ sx, ...rest }: IconColorSchema) {
  return (
    <Box
      sx={{
        width: 20,
        height: 20,
        display: "flex",
        borderRadius: "50%",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "currentColor",
        transition: (theme) =>
          theme.transitions.create("all", {
            duration: theme.transitions.duration.shortest,
          }),
        ...sx,
      }}
      {...rest}
    >
      <Icon icon={checkmarkFill} />
    </Box>
  );
}

interface schema {
  colors: string[];
  onChecked: (arg: string) => boolean;
  sx: any;
  name?: string;
  onChange: (arg: any) => void
}
export default function ColorManyPicker({
  colors,
  onChecked,
  sx,
  name,
  onChange,
  ...rest
}: schema) {
  return (
    <Box sx={sx}>
      {colors.map((color) => {
        const isWhite = color === "#FFFFFF" || color === "white";

        return (
          <Checkbox
            key={color}
            size="small"
            value={color}
            color="default"
            checked={onChecked(color)}
            icon={
              <IconColor
                sx={{
                  ...(isWhite && {
                    border: (theme: any) =>
                      `solid 1px ${theme.palette.divider}`,
                  }),
                }}
              />
            }
            checkedIcon={
              <IconColor
                sx={{
                  transform: "scale(1.4)",
                  "&:before": {
                    opacity: 0.48,
                    width: "100%",
                    content: "''",
                    height: "100%",
                    borderRadius: "50%",
                    position: "absolute",
                    boxShadow: "4px 4px 8px 0 currentColor",
                  },
                  "& svg": { width: 12, height: 12, color: "common.white" },
                  ...(isWhite && {
                    border: (theme: any) =>
                      `solid 1px ${theme.palette.divider}`,
                    boxShadow: (theme: any) =>
                      `4px 4px 8px 0 ${theme.palette.grey[500_24]}`,
                    "& svg": { width: 12, height: 12, color: "common.black" },
                  }),
                }}
              />
            }
            sx={{
              color,
              "&:hover": { opacity: 0.72 },
            }}
            name={name}
            onChange={onChange}
            {...rest}
          />
        );
      })}
    </Box>
  );
}
