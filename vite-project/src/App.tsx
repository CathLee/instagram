/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-07-14 22:00:27
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-07-15 10:17:50
 * @FilePath: /instagram/vite-project/src/App.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import styled from "styled-components";

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Route from "./Routes";



function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Route />
        </>
    );
}

export default App;
