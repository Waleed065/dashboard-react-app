import React from "react";
import {  Navigate, Route } from "react-router-dom";
import {staticPaths} from '../constants';

const {homeRoute:{notFoundRoute}} = staticPaths;


interface schema {
  redirectTo?: string;
  path: string;
  element: JSX.Element;
  condition: boolean;
}
export default function PrivateRoute({
  path,
  redirectTo,
  element,
  condition,
}: schema) {
  if (condition)
    return <Route path={path} element={element} />;

  return <Navigate to={redirectTo ?? notFoundRoute} replace />;
}
