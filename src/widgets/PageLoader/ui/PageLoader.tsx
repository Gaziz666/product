import React from "react";
import { cn } from "shared/lib/classNames/classNames";
import cls from "./PageLoader.module.scss";
import { Loader } from "shared/ui/Loader";

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
    return (
        <div className={cn(cls.PageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};
