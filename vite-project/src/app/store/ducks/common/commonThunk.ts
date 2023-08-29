/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-08-22 21:57:37
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-08-28 22:15:08
 * @FilePath: /instagram/vite-project/src/app/store/ducks/common/commonThunk.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CommonType } from "../../../../@type";
import { authorizedCustomAxios } from "../../../../customAxios";
import { FAIL_TO_REISSUE_MESSAGE } from "../../../../utils/constant";
import { RootState } from "../../store";
import { authAction } from "../auth/authSlice";

export const searchUser = createAsyncThunk<
    CommonType.searchResultType[], // 异步 action 返回值的类型
    { keyword: string }, // 异步函数的参数类型
    { state: RootState } // 额外信息对象类型extraReducers，包含一个名为 state 的属性，类型为 RootState
>(
    "common/searchUser",
    async (playload, { getState, dispatch, rejectWithValue }) => {
        // const config = {
        //     params: {
        //         text: playload.keyword,
        //     },
        // };
        try {
            const { data } = await authorizedCustomAxios(`/api/users/search/${playload.keyword}`);
            console.log(data);
            
            return data
        } catch (error) {
            error === FAIL_TO_REISSUE_MESSAGE && dispatch(authAction.logout());
        }
    },
);
export const getSearchRecord = createAsyncThunk<
    CommonType.searchResultType[], // 异步 action 返回值的类型
    void,
    { state: RootState }
>(
    "auth/getSearchRecord",
    async (playload, { getState, dispatch, rejectWithValue }) => {
        try {
            const { data } = await authorizedCustomAxios.get(
                "/topsearch/recent/top",
            );

            return data.data.content;
        } catch (error) {
            error === FAIL_TO_REISSUE_MESSAGE && dispatch(authAction.logout());
            throw rejectWithValue(error);
        }
    },
);
