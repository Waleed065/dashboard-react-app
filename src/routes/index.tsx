import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import { staticPaths } from "../constants";
import LogoOnlyLayout from "./LogoOnlyLayout";
import Login from "./Login";
import DashboardLayout from "./DashboardLayout";
import Dashboard from "./Dashboard";
import TextLink from "./TextLink";
import User from "./User";
import Products from "./Products";
import Blog from "./Blog";
import Banner from "./Banner";


const {
  homeRoute: { homeRoute, notFoundRoute, loginRoute, badRequestRoute },
  dashboardRoute: {
    dashboardRoute,
    dashboardHomeRoute,
    textLinkRoute,
    bannersRoute,
    userRoute,
    productsRoute,
    blogRoute,
  },
} = staticPaths;

export default function Router() {

  return (
    <Routes>
      <Route path={dashboardRoute} element={<DashboardLayout />}>
        <Route path={dashboardHomeRoute} element={<Dashboard />} />
        <Route path={textLinkRoute} element={<TextLink />} />
        <Route path={bannersRoute} element={<Banner />} />
        <Route path={userRoute} element={<User />} />
        <Route path={productsRoute} element={<Products />} />
        <Route path={blogRoute} element={<Blog />} />
      </Route>

      <Route path={homeRoute} element={<LogoOnlyLayout />}>
        <Route path={loginRoute} element={<Login />} />
        <Route path={notFoundRoute} element={<NotFound />} />
        <Route path={badRequestRoute} element={<NotFound unauthorized />} />

        <Route path={homeRoute} element={<Navigate to={`${homeRoute}/${loginRoute}`} />} />
        <Route
          path={"*"}
          element={<Navigate to={homeRoute + notFoundRoute} />}
        />
      </Route>

      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}
