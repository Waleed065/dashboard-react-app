import { motion } from "framer-motion";
import { Box } from "@material-ui/core";
import {varWrapEnter} from "../animations/wraps";

// ----------------------------------------------------------------------

interface schema {
  open: boolean;
  initial?: string;
  children: JSX.Element;
}
export default function MotionContainer({ open, initial, children, ...rest }: schema) {
  return (
    <Box
      component={motion.div}
      initial={initial ?? false}
      animate={open ? "animate" : "exit"}
      variants={varWrapEnter}
      {...rest}
    >
      {children}
    </Box>
  );
}
