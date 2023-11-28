import React from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkThemes } from 'shared/ui/AppLink/';

import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={cn(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkThemes.SECONDARY}
                    to="/"
                    className={cls.mainLink}
                >
                    {t('mainPage')}
                </AppLink>
                <AppLink theme={AppLinkThemes.RED} to="/about">
                    {t('aboutPage')}
                </AppLink>
            </div>
        </div>
    );
};
