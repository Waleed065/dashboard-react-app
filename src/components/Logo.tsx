// material
import { Box } from "@material-ui/core";

interface schema {
  sx?: any;
}
export default function Logo({ sx }: schema) {
  return (
    <Box
      component="img"
      src="/static/logo.png"
      sx={{ width: 40, height: 40, ...sx }}
    />
  );
}
