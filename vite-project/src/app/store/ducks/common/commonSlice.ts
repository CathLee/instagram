/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-08-20 21:49:50
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-08-23 23:14:29
 * @FilePath: /instagram/vite-project/src/app/store/ducks/common/commonSlice.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { createSlice } from "@reduxjs/toolkit";
import { CommonType } from "../../../../@type";
import { searchUser } from "./commonThunk";

export interface InitialStateType {
    isLoading: boolean;
    searchUserKeyword: string;
    searchUserResult: CommonType.searchResultType[];
    recordedUser: CommonType.searchResultType[];
}

const initialState:InitialStateType = {
    isLoading: false,
    searchUserKeyword: "",
    searchUserResult: [],
    recordedUser: [],
};
const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {
        resetRecordedUser:(state)=>{
            state.recordedUser = [];
        }
    },
    extraReducers(builder) {
        builder.addCase(searchUser.pending, (state) => {
            state.isLoading = true   
        });
    },
})
