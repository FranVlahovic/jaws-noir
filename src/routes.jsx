import App from "./App";
import Home from "./components/Home/Home";
import Favorites from "./components/Favorites/Favorites";
import StoreItem from "./components/Store/StoreItem";
import Account from "./components/Account/UserAccount";
import AboutUs from "./components/About/AboutUs";
import MenClothes from "./components/Store/MenClothes";
import WomenClothes from "./components/Store/WomenClothes";

const routes = [
    {
        path: "/",
        element: <App />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "about",
                element: <AboutUs />,
            },
            {
                path: "account",
                element: <Account />,
            },
            {
                path: "store/favorites",
                element: <Favorites />,
            },
            {
                path: "store/men",
                element: <MenClothes />,
            },
            {
                path: "store/men/:id",
                element: <StoreItem />,
            },
            {
                path: "store/women",
                element: <WomenClothes />,
            },
            {
                path: "store/women/:id",
                element: <StoreItem />,
            },
        ]
    },
    
];

export default routes;
