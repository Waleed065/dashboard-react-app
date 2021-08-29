import { Helmet } from "react-helmet-async";
import { forwardRef } from "react";
// material
import { Box } from "@material-ui/core";

// ----------------------------------------------------------------------
type refType = React.Ref<any>
interface schema {
  title?: string;
  children: JSX.Element | JSX.Element[];
}
const Page = forwardRef(({ children, title = "", ...rest }: schema, ref: refType) => (
  <Box ref={ref} {...rest}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </Box>
));

export default Page;
