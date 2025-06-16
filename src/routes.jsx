import App from "./App";
import Home from "./components/Home/Home";
import Favorites from "./components/Store/Favorites";
import StoreItem from "./components/Store/StoreItem";
import Store from "./components/Store/Store";
import Account from "./components/Account/UserAccount";
import AboutUs from "./components/About/AboutUs";

const routes = [
    {
        path: "/",
        element: <App />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "home",
                element: <Home />
            },
            {
                path: "about",
                element: <AboutUs />
            },
            {
                path: "store",
                element: <Store />,
            },
            {
                path: "account",
                element: <Account />
            },
            {
                path: "store/favorites",
                element: <Favorites />
            },
            {
                path: "store/:id",
                element: <StoreItem />
            }
        ]
    },
    
];

export default routes;
