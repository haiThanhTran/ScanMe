import { useState } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import Pages from "./pages/_id";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TestUploadImage from "./pages/views/main/app_bar/TestUploadImage";
import Film_detail from "./pages/views/main/film/Film_detail";
import Login from "./pages/views/main/app_bar/Login/Login";
import ShoppingCartComponent from "./components/Cart/ShoppingCartComponent ";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { GlobalProvider } from "./config/GlobalContext";
import Header from "./pages/views/main/app_bar/App_bar";
import AdminFunction from "./pages/views/main/dashboard/AdminFunction";
import { UserProvider, UserContext } from "./ultils/userContext";

import store from "./redux/store";

const theme = createTheme({
  typography: {
    fontFamily: "'Nunito Sans', sans-serif",
  },
  palette: {
    primary: {
      main: "#1976d2", // Màu chính (required)
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

function App() {
  return (
    <UserProvider>
      <Provider store={store}>
        <GlobalProvider>
          <ThemeProvider theme={theme}>
            <Router>
              <Routes>
                <Route path="/" element={<Pages />} />
                <Route path="/signin" element={<Login />} />
                <Route path="/cart" element={<ShoppingCartComponent />} />
                <Route path="/upload-new-film" element={<TestUploadImage />} />
                <Route path="/detail/:id" element={<Film_detail />} />
                <Route
                  path="/adminfunction/*"
                  element={<AdminFunction />}
                />{" "}
              </Routes>
            </Router>
          </ThemeProvider>
        </GlobalProvider>
      </Provider>
    </UserProvider>
  );
}

export default App;
