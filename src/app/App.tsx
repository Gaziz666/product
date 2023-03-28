import { Link } from "react-router-dom";
import "./styles/index.scss";
import { cn } from "shared/lib/classNames";
import { useTheme } from "app/providers/ThemProvider";
import { AppRouter } from "app/providers/router/ui";
import { Navbar } from "widgets/Navbar";

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={cn("app", {}, [theme])}>
            <Navbar />
            <AppRouter />
        </div>
    );
};
