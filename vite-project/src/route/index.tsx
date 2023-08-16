/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-07-15 09:58:38
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-08-16 22:32:07
 * @FilePath: /instagram/vite-project/src/route/index.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { BrowserRouter, useRoutes } from "react-router-dom";
import { useAppSelector } from "../app/store/Hooks";
import Landing from "../pages/Landing";
const GetRoutes = () => {
    const isLogin = useAppSelector((state)=>state.auth.isLogin)
    const routes = useRoutes([
        { path: "/", element: <Landing /> },
    ]);
    
    return routes;
};


export default GetRoutes;