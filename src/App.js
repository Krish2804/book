import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/theme";
import "./assets/css/style.css";
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainNavigation from "./components/MainNavigation";
import { AuthWrapper } from "./context/auth";
import l1 from "../src/assets/images/l4.gif";
import { CartWrapper } from "./context/cart";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<></>}>
        <BrowserRouter>
          <AuthWrapper>
            <CartWrapper>
              <div className="loader-wrapper">
                <img src={l1} alt="loader" />
              </div>
              <div className="wrapper">
                <Header />
                <main>
                  <MainNavigation />
                </main>
                <Footer />
              </div>
              <ToastContainer />
            </CartWrapper>
          </AuthWrapper>
        </BrowserRouter>
      </React.Suspense>
    </ThemeProvider>
  );
};

export default App;