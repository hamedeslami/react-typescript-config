import { HomePage, LoginPage } from "../pages";

interface routesType {
    route: string;
    element: JSX.Element;
}

export const routes: routesType[] = [
    {
        route: "/",
        element: <HomePage/>,
    },
    {
        route: "/login",
        element: <LoginPage/>,
    },
];

const allwaysShowRoutes: string[] = [];
const beforeAuthRoutes: string[] = ["/login"];

export const filterRoutesByAuthStep = (isAuth: boolean) => {
    return routes.filter((item) => {
        if (!isAuth) {
            if (
                beforeAuthRoutes.includes(item.route) ||
                allwaysShowRoutes.includes(item.route)
            ) {
                return item;
            }
        } else if (
            !beforeAuthRoutes.includes(item.route) ||
            allwaysShowRoutes.includes(item.route)
        ) {
            return item;
        }
    });
};