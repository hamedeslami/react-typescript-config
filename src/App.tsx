import { useSelector } from "react-redux";
import { filterRoutesByAuthStep } from "@config/routes";
import { isAuthSelector } from "@store/user/auth.selectors";

import { Navigate, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "@mui/material";
import { getTheme } from "@config/theme";
import {CssBaseline} from "@mui/material";
import PrivateLayout from "@src/layout/private";
import PublicLayout from "@src/layout/public";

type themeType = "light" | "dark";

const getSystemThemeMode = (): themeType => {
  if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  )
    return "dark";

  return "light";
};

export default function App() {
  const isAuth = useSelector(isAuthSelector);
  const routes = filterRoutesByAuthStep(isAuth);

  return (
      <ThemeProvider
          theme={getTheme({
            mode:
                (localStorage.getItem("theme") as themeType) || getSystemThemeMode(),
          })}
      >
        <CssBaseline/>
        <Routes>
          <Route element={isAuth ? <PrivateLayout/> : <PublicLayout/>}>
            {routes.map((item) => {
              return (
                  <Route path={item.route} element={item.element} key={item.route}/>
              );
            })}
          </Route>
          <Route path="*" element={<Navigate replace to={routes[0].route}/>}/>
        </Routes>
      </ThemeProvider>
  )
}
