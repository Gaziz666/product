import React, { Suspense } from "react";
import "./styles/index.scss";
import { cn } from "shared/lib/classNames";
import { useTheme } from "app/providers/ThemProvider";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/SideBar";

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={cn("app", {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
