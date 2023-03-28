import React, { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { cn } from "shared/lib/classNames";
import cls from "./AppLink.module.scss";

export enum AppLinkThemes {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    RED = "red",
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkThemes;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className,
        to,
        children,
        theme = AppLinkThemes.PRIMARY,
        ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={cn(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
