import React from "react";
import { cn } from "shared/lib/classNames";
import { AppLink, AppLinkThemes } from "shared/ui/AppLink/";

import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={cn(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkThemes.SECONDARY}
                    to={"/"}
                    className={cls.mainLink}
                >
                    Главная
                </AppLink>
                <AppLink theme={AppLinkThemes.RED} to={"/about"}>
                    0 страница
                </AppLink>
            </div>
        </div>
    );
};
