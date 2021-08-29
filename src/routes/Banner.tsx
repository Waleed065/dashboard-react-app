import React, { useState } from "react";
import { styled } from "@material-ui/core/styles";
import Page from "../components/Page";
import { Container, Grid, Typography } from "@material-ui/core";
import { grey50 } from "../constants/theme";
import LinkClipboard from "../components/LinkClipboard";
import BannerForm from "../components/BannerForm";

export default function Banner() {
  const [linkType, setLinkType] = useState("");
  const [newWindow, setNewWindow] = useState(true);

  return (
    <StyledPage title="Links | Vurtos">
      <Container maxWidth="xl">
        <Typography variant="h4">Create A Text Link</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <BannerForm
              linkType={linkType}
              newWindow={newWindow}
              setLinkType={setLinkType}
              setNewWindow={setNewWindow}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <LinkClipboard />
          </Grid>
        </Grid>
      </Container>
    </StyledPage>
  );
}

const StyledPage = styled(Page)({
  backgroundColor: grey50,
  minHeight: "100%",
});
