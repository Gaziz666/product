import React from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={cn(cls.ErrorPage, {}, [className])}>
            <p>{t('errorText')}</p>
            <Button onClick={reloadPage}>{t('reloadPage')}</Button>
        </div>
    );
};
