/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-07-15 17:16:18
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-07-15 17:22:25
 * @FilePath: /instagram/vite-project/src/app/ducks/auth/authSlice.ts
 * @Description: slice 主要是一个处理store里面state变化的一个函数
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { createSlice } from "@reduxjs/toolkit";

export interface AuthStateProps {
    isLogin: boolean;
}

const initialState:AuthStateProps = {
    isLogin: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state) {
            state.isLogin = true;
        },
    },
});
export const authReducer = authSlice.reducer;