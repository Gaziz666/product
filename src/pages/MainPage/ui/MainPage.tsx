import { BugButton } from "app/providers/ErrorBoundary/ui/BugButton";
import React from "react";
import { useTranslation } from "react-i18next";

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            <BugButton />
            {t("mainPage")}
        </div>
    );
};

export default MainPage;
