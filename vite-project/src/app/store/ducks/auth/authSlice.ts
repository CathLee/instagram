/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-07-15 17:16:18
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-08-23 22:48:36
 * @FilePath: /instagram/vite-project/src/app/store/ducks/auth/authSlice.ts
 * @Description: slice 主要是一个处理store里面state变化的一个函数
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signIn } from "./authThunk";

export interface AuthStateProps {
    isLogin: boolean;
    hasUserName?: boolean;
    isRefreshTokenChecking: boolean;
}

const initialState: AuthStateProps = {
    isLogin: false,
    hasUserName: false,
    isRefreshTokenChecking: true,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state) {
            state.isLogin = true;
        },
        hasUser(state, actions: PayloadAction<{ data: boolean }>) {
            state.hasUserName = actions.payload.data;
        },
        finishRefreshTokenChecking: (state) => {
            state.isRefreshTokenChecking = false;
        },
        logout: (state) => {
            state.isLogin = false;
        },
    },
    extraReducers(builder) {
        // 等authThunk.ts里面的登陆函数（signIn）执行完毕后，会执行下面的函数
        builder.addCase(signIn.fulfilled, (state, action) => {
            state.isLogin = true;
        });
        builder.addCase(signIn.rejected, (state, action) => {
            state.isLogin = false;
        });
    },
});

export const authAction = authSlice.actions;
export const authReducer = authSlice.reducer;
