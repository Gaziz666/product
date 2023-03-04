import { Suspense } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
    return (
        <div>
            {" "}
            <Suspense fallback={<div>...loading</div>}>
                <Routes>
                    {Object.values(routeConfig).map(({ path, element }) => {
                        <Route path={path} element={element} key={path} />;
                    })}
                </Routes>
            </Suspense>
        </div>
    );
};
