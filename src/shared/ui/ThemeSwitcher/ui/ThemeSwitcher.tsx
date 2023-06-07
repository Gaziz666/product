import { useTheme, Theme } from "app/providers/ThemProvider";
import React from "react";
import { cn } from "shared/lib/classNames";
import LightIcon from "../../../assets/icons/theme-light.svg";
import DarkIcon from "../../../assets/icons/theme-dark.svg";
import { Button, ThemeButton } from "shared/ui/Button";

interface IThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: IThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={cn("", {}, [className ?? ""])}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
};
