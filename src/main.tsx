import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./scss/globals.scss";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/pages/Home/index.tsx";
import About from "./components/pages/About/index.tsx";
import RecipesIndex from "./components/pages/RecipesIndex/index.tsx";
import RecipeDetails from "./components/pages/RecipeDetails/index.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            { index: true, Component: Home },
            { path: "about", Component: About },
            {
                path: "recipes",
                children: [
                    { index: true, Component: RecipesIndex },
                    {
                        path: ":id",
                        Component: RecipeDetails,
                    },
                ],
            },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
