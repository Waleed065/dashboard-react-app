import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { styled } from "@material-ui/core/styles";
import Page from "../components/Page";
import { Box, Button, Container, Typography } from "@material-ui/core";
import AnimationContainer from "../animations";
import { varBounceIn } from "../animations/bounceIn";
import { staticPaths } from "../constants";

const { homeRoute: {homeRoute} } = staticPaths;

const options = {
  404: {
    img: "/static/illustrations/404.png",
    title: "Sorry, Page Not Found!",
    details:
      "Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling.",
    redirectTo: homeRoute,
  },
  400: {
    img: "/static/illustrations/400.png",
    title: "Bad Request, Method Not Allowed!",
    details:
      "Sorry, we've detected a bad request. Perhaps you’ve provided invalid credentials? Be sure to check if you're logged-in.",
    redirectTo: homeRoute,
  },
};

const RootStyle = styled(Page)(({ theme }) => ({
  display: "flex",
  minHeight: "100%",
  alignItems: "center",
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

interface schema {
  unauthorized?: boolean;
}
export default function NotFound({ unauthorized = false }: schema) {
  const { img, title, details, redirectTo } = unauthorized
    ? options[400]
    : options[404];

  return (
    <RootStyle title="404 Not Found | Vurtos">
      <Container>
        <AnimationContainer initial="initial" open>
          <Box sx={{ maxWidth: 480, margin: "auto", textAlign: "center" }}>
            <motion.div variants={varBounceIn}>
              <Typography variant="h3" paragraph>
                {title}
              </Typography>
            </motion.div>
            <Typography sx={{ color: "text.secondary" }}>{details}</Typography>
            <motion.div variants={varBounceIn}>
              <Box
                component="img"
                src={img}
                sx={{ height: 260, mx: "auto", my: { xs: 5, sm: 10 } }}
              />
            </motion.div>

            <Button
              to={redirectTo}
              size="large"
              variant="contained"
              component={Link}
            >
              Go Back
            </Button>
          </Box>
        </AnimationContainer>
      </Container>
    </RootStyle>
  );
}
