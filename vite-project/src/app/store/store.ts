/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-07-15 17:13:44
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-10-28 21:37:14
 * @FilePath: /instagram/vite-project/src/app/store/store.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./ducks/auth/authSlice";
import { commonReducer } from "./ducks/common/commonSlice";
import { homeReducer } from "./ducks/home/homeslice";
export const store = configureStore({
    reducer: {
        auth: authReducer,
        common: commonReducer,
        home:homeReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
