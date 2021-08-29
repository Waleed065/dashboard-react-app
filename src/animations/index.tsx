import React from "react";
import { Box } from "@material-ui/core";
import { motion } from "framer-motion";
import { varWrapEnter } from "../animations/wraps";

interface schema {
  open: boolean;
  initial?: string;
  children: JSX.Element;
}
export default function AnimationContainer({
  open,
  initial,
  children,
}: schema) {
  return (
    <Box
      component={motion.div}
      initial={initial ?? false}
      animate={open ? "animate" : "exit"}
      variants={varWrapEnter}
    >
      {children}
    </Box>
  );
}
