/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-07-15 17:20:09
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-10-16 19:55:33
 * @FilePath: /instagram/vite-project/src/app/store/ducks/auth/authThunk.ts
 * @Description: thunk 主要是一个处理异步请求的一个函数，使用slice的action,将dispatch和actionCreator结合起来,
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
// 登录（首次发放token）+token过期后，进入登录首页

import { AuthType } from "../../../../@type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { SignInRequestType } from "./authThunk.type";
import { AxiosRequestConfig } from "axios";
import { authAction } from "./authSlice";
import { authorizedCustomAxios, customAxios } from "../../../../customAxios";

/**
 * 这里的范型是有两个，第一个是返回值的类型，第二个是参数的类型
 * @description 登陆时校验当前用户，并存储token
 * @param AuthType.Token 返回值的类型
 * @param SignInRequestType 参数的类型
 */
export const signIn = createAsyncThunk<AuthType.Token, SignInRequestType>(
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
        try {
            // 这里不确定为什么要使用{data:{data}}，而不是直接使用data
            // const {
            //     data: { data },
            // } = await customAxios.post(`/login`, {
            //     password: payload.password,
            //     username: payload.username,
            // });
            // const { data } = await customAxios.post(`/login`, {
            //     password: payload.password,
            //     username: payload.username,
            // });
            // const { data } = await customAxios.get(`/api/users`);
            const data = "fadsfd"
            console.log(data);
            return data;
        } catch (error) {
            if (!window.navigator.onLine) {
                ThunkOptions.rejectWithValue("网络异常，请检查网络");
            } else {
                const checkUserName = async () => {
                    try {
                        const config = {
                            params: {
                                username: payload.username,
                            },
                        };
                        // const { data } = await customAxios.get(
                        //     `/accounts/check`,
                        //     config,
                        // );
                        const { data } = await customAxios.get(`/api/users`);
                        console.log(data);
                        return data;
                    } catch (error) {
                        throw ThunkOptions.rejectWithValue(error);
                    }
                };
                // 检查当前用户名是否存在
                await ThunkOptions.dispatch(checkUserName).then((res) => {
                    ThunkOptions.dispatch(authAction.hasUser(res));
                });
                throw ThunkOptions.rejectWithValue(error);
            }
        }
    },
);

export const logout = createAsyncThunk<void,void>(
    "auth/logout",
    async(playload,ThunkOptions)=>{
        try{
            await authorizedCustomAxios.post(`/logout`);
        }catch(error){
            ThunkOptions.rejectWithValue(error);
        }
    }
)
