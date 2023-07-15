/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-07-14 22:26:06
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-07-15 10:14:24
 * @FilePath: /instagram/vite-project/src/Routes.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { BrowserRouter,Routes } from "react-router-dom";
import GetRoutes from "./route";
const Route = () => {
    return (
        <BrowserRouter>
            <GetRoutes />
        </BrowserRouter>
    );
};

export default Route;
