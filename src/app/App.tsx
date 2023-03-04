import { Link } from "react-router-dom";
import "./styles/index.scss";
import { cn } from "shared/lib/classNames";
import { useTheme } from "app/providers/ThemProvider";
import { AppRouter } from "app/providers/router/ui";

export const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={cn("app", {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>0 страница</Link>
            <AppRouter />
        </div>
    );
};
