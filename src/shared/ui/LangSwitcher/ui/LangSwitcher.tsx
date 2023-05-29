import React from "react";
import { cn } from "shared/lib/classNames";
import styles from "./LangSwitcher.module.scss";

import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button";

interface ILangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: ILangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggle = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };
    return (
        <Button
            className={cn(styles.LangSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t("lang")}
        </Button>
    );
};
