import App from "./App";
import Home from "./components/Home/Home";
import Favorites from "./components/Store/Favorites";
import StoreItem from "./components/Store/StoreItem";
import Store from "./components/Store/Store";
import Login from "./components/Login/Login";

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
                // element: <About />
            },
            {
                path: "store",
                element: <Store />,
            },
            {
                path: "login",
                element: <Login />
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
