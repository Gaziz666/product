import React, { useState } from "react";
import { cn } from "shared/lib/classNames";
import { LangSwitcher } from "shared/ui/LangSwitcher";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

import cls from "./Sidebar.module.scss";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const handleClick = () => setCollapsed((prev) => !prev);
    return (
        <div
            className={cn(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <button onClick={handleClick}>toggle</button>
            <div className={cls.switcher}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.langBtn} />
            </div>
        </div>
    );
};
