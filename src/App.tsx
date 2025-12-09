import { NavLink, Outlet } from "react-router";

export default function App() {
    return (
        <div data-textPreset="6">
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/recipes" end>Recipes</NavLink>
            </nav>

           <Outlet />
        </div>
    );
}
