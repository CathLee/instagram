/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-07-14 22:00:27
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-08-20 16:50:19
 * @FilePath: /instagram/vite-project/src/App.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import styled from "styled-components";

import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Route from "./Routes";
import { useAppDispatch, useAppSelector } from "./app/store/Hooks";
import { authAction } from "./app/store/ducks/auth/authSlice";
import { customAxios } from "./customAxios";
import Routes from "./Routes";



function App() {
    const isRefreshTokenChecking = useAppSelector((state) => state.auth.isRefreshTokenChecking);
    const dispatch = useAppDispatch();
    // useEffect(()=>{
    //     const reset = async ()=>{
    //         try{
    //             const {data} =await customAxios.get("api/users")
    //             if(data){
    //                 dispatch(authAction.login())
    //             }
    //         }finally{
    //             dispatch(authAction.finishRefreshTokenChecking());
    //         }
    //     }
    //     reset()
    // },[dispatch])
    return (
        <div className="App">
            {/* {isRefreshTokenChecking ? "fdfasd" : <Routes />} */}
            <Routes />
        </div>
    );
}

export default App;
