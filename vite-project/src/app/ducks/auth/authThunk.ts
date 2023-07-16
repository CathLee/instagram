/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-07-15 17:20:09
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-07-16 10:59:18
 * @FilePath: /instagram/vite-project/src/app/ducks/auth/authThunk.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
// 登录（首次发放token）+token过期后，进入登录首页

import { createAsyncThunk } from "@reduxjs/toolkit";
import { SignInRequestType } from "./authThunk.type";
/**
 * 这里的范型是有两个，第一个是返回值的类型，第二个是参数的类型
 * @param AuthType.Token 返回值的类型
 * @param SignInRequestType 参数的类型
 */
const signIn = createAsyncThunk<AuthType.Token, SignInRequestType>(
    /**
     * createAsyncThunk接受两个参数，第一个参数是action的名字，第二个参数是一个函数，
     * 函数的第一个参数是action的payload，第二个参数是thunk的一些配置，比如dispatch，getState等等。
     */
    "auth/signIn",
    /**
     * 
     * @param payload thunk action的payload
     * @param _ThunkOptions 一种类型，包含dispatch，getState等等
     */
    async (payload, ThunkOptions) => {
        try{
            const {data} = await axios.post<AuthType.Token>("login",{
                username:payload.username,
                password:payload.password,
            });
            return data
        }catch(e){
            ThunkOptions.rejectWithValue(e);
        }
    },
);
