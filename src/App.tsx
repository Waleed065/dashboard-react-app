import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import ScrollToTop from "./components/ScrollToTop";
import ThemeConfig from "./theme";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeConfig>
          <ScrollToTop />
          
          <Router />
        </ThemeConfig>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
