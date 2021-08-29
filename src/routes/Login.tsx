import { Link as RouterLink } from "react-router-dom";
import { styled } from "@material-ui/core/styles";
import { Card, Stack, Link, Container, Typography } from "@material-ui/core";
import AuthLayout from "../components/AuthLayout";
import Page from "../components/Page";
import MHidden from "../components/MHidden";
import LoginForm from "../components/LoginForm";
import {
  defaultSpaceMd,
  defaultSpaceSm,
} from "../constants/styles";

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function Login() {
  return (
    <RootStyle title="Login | Vurtos">
      <AuthLayout>
        <Typography>Not an affiliate? &nbsp;</Typography>
        <Link
          underline="none"
          variant="subtitle2"
          component={RouterLink}
          to="/register"
        >
          Get started
        </Link>
      </AuthLayout>

      <MHidden width="mdDown">
        <SectionStyle>
          <img
            src="/static/illustrations/login.png"
            alt="login"
            width="100%"
            height="100%"
          />
        </SectionStyle>
      </MHidden>

      <Container maxWidth="sm" style={{ padding: 0 }}>
        <ContentStyle>
          <Stack sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              Sign In Vurtos Affiliates Dashboard
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Choose A Method To Login
            </Typography>
          </Stack>

          <LoginForm />

          <MHidden width="smUp">
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              Not an affiliate?&nbsp;
              <Link variant="subtitle2" component={RouterLink} to="register">
                Get Started
              </Link>
            </Typography>
          </MHidden>
        
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}

const RootStyle = styled(Page)(({ theme }) => ({
  display: "flex",
  minHeight: "100%",

  paddingBottom: theme.spacing(defaultSpaceMd),
  [theme.breakpoints.down("sm")]: {
    paddingBottom: theme.spacing(defaultSpaceSm),
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 464,
  marginLeft: theme.spacing(defaultSpaceMd),
  marginRight: 0,

  borderRadius: 20,
  overflow: "hidden",

  [theme.breakpoints.down("sm")]: {
    marginLeft: theme.spacing(defaultSpaceSm),
  },
}));

const ContentStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  height: "100%",
  padding: theme.spacing(12, defaultSpaceMd),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(12, defaultSpaceSm),
  }
}));
