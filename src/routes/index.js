import { Home, Main } from "../views/pages";

const routes = [
    {
        path: "/",
        component: Main,
        exact: true,
    },
    {
        path: "/home",
        component: Home,
        exact: true,
    },
];

export default routes;