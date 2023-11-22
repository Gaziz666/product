import React from "react";
import { cn } from "shared/lib/classNames/classNames";
import cls from "./Loader.module.scss";

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
    return <span className={cn(cls.Loader, {}, [className])}></span>;
};
