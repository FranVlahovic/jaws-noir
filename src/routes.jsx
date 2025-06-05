import App from "./App";
import Home from "./components/Home/Home";

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
                path: "/home",
                element: <Home />
            },
            {
                path: "/about",
                // element: <About />
            },
            {
                path: "/store",
                // element: <Store />
            }
        ]
    },
    
];

export default routes;
