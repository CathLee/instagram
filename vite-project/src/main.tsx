/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-07-14 22:00:27
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-07-15 16:23:08
 * @FilePath: /instagram/vite-project/src/main.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import themes from "./style/themes";
import { ThemeProvider } from "styled-components"

;
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={themes}>
                <App />
            </ThemeProvider>
    </React.StrictMode>,
);
