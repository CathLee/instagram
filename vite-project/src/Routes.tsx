/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-07-14 22:26:06
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-10-16 20:41:50
 * @FilePath: /instagram/vite-project/src/Routes.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { BrowserRouter, Routes } from "react-router-dom";
import { Route as MyRoute } from "react-router-dom";
import { useAppSelector } from "./app/store/Hooks";
import Landing from "./pages/Landing";
import ModalsInEveryRoutes from "./ModalsInEveryRoutes";
import Header from "./components/Common/Header/Header";
import Home from "./pages/Home/Home";

const Route = () => {
    const isLogin = useAppSelector((state) => state.auth.isLogin);
    // console.log(isLogin);
    // 授权后可访问的页面
    const AuthedContainer = () => {
        return (
            <>
                <MyRoute path="/" element={<Home />} />
            </>
        );
    };
    return (
        <BrowserRouter>
            {isLogin ? (
                <>
                    <ModalsInEveryRoutes />
                    <Header />
                    <Routes>
                        {AuthedContainer()}
                    </Routes>
                </>
            ) : (
                <Routes>
                    <MyRoute path="/" element={<Landing />} />
                </Routes>
            )}
        </BrowserRouter>
    );
};

export default Route;
