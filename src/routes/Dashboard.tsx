import React from "react";

import { Grid, Container, alpha } from "@material-ui/core";

import AppConversionRates from "../components/AppConversionRates";
import AppCurrentSubject from "../components/AppCurrentSubject";
import AppCurrentVisits from "../components/AppCurrentVisits";
import AppNewsUpdate from "../components/AppNewsUpdate";
import AppOrderTimeline from "../components/AppOrderTimeline";
import AppWebsiteVisits from "../components/AppWebsiteVisits";
import ReportCard from "../components/ReportCard";
import AppTrafficBySite from "../components/AppTrafficBySite";

import Page from "../components/Page";
import AppTasks from "../components/AppTasks";
import {
  primaryDark,
  primaryLight,
  secondaryDark,
  secondaryLight,
  warningDark,
  warningLight,
} from "../constants/theme";

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | Vurtos">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <ReportCard
              color={primaryDark}
              backgroundColor={alpha(primaryLight, 0.9)}
              description={"Unpaid earnings "}
              earning={14}
              tip={"Total amount of unpaid earnings to date."}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ReportCard
              color={secondaryDark}
              backgroundColor={alpha(secondaryLight, 0.3)}
              description={"Paid earnings"}
              earning={14}
              tip={"Total amount of paid out commission to date."}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ReportCard
              color={warningDark}
              backgroundColor={alpha(warningLight, 0.3)}
              description={"Next payment round"}
              earning={14}
              tip={
                "Projected amount of commission payout at the next payment date."
              }
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
