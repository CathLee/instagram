/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-07-15 17:16:18
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-10-29 16:01:39
 * @FilePath: /instagram/vite-project/src/app/store/ducks/auth/authSlice.ts
 * @Description: slice 主要是一个处理store里面state变化的一个函数
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthType } from "../../../../@type";
import { signIn } from "./authThunk";

export interface AuthStateProps {
    isLogin: boolean;
    isLoading: boolean;
    isAsyncReject: boolean;
    errorMessage: string | undefined;
    hasUsername: boolean | null;
    isRefreshTokenChecking: boolean;
    // currentFormState: FormState;
    // signUpUserData: AuthType.signUpUserData | null;
    userInfo: AuthType.UserInfo | null;
    hasNotification: boolean;
    // resetPassword: AuthType.resetPasswordState;
    // loginDeviceList: LoginDevice[] | null;
}

const initialState: AuthStateProps = {
    isLogin: false,
    isLoading: false,
    isAsyncReject: false,
    errorMessage: "",
    hasUsername: null,
    isRefreshTokenChecking: true,
    // currentFormState: "signIn",
    // signUpUserData: null,
    userInfo: null,
    hasNotification: false,
    // resetPassword: { email: undefined },
    // loginDeviceList: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state) {
            state.isLogin = true;
        },
        hasUser(state, actions: PayloadAction<{ data: boolean }>) {
            // state.hasUserName = actions.payload.data;
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
