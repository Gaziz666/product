import React, { type HtmlHTMLAttributes, type FC } from "react";
import { cn } from "shared/lib/classNames/classNames";
import styles from "./Button.module.scss";

export enum ThemeButton {
    CLEAR = "clear",
}

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme, ...otherProps } = props;
    console.log("theme", theme);
    const classNames = [];
    if (className) {
        classNames.push(className);
    }
    if (theme) {
        classNames.push(styles[theme]);
    }
    return (
        <button className={cn(styles.Button, {}, classNames)} {...otherProps}>
            {children}
        </button>
    );
};
