import React from "react";
import { cn } from "shared/lib/classNames";

import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button";

interface ILangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: ILangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggle = () => {
        void i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };
    const classNames = [];
    if (className) {
        classNames.push(className);
    }
    return (
        <Button
            className={cn("", {}, classNames)}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t("lang")}
        </Button>
    );
};
