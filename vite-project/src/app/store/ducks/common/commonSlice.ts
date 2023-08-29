/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-08-20 21:49:50
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-08-27 15:06:12
 * @FilePath: /instagram/vite-project/src/app/store/ducks/common/commonSlice.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CommonType } from "../../../../@type";
import { searchUser } from "./commonThunk";

export interface InitialStateType {
    isLoading: boolean;
    searchUserKeyword: string;
    searchUserResult: CommonType.searchResultType[];
    recordedUser: CommonType.searchResultType[];
}

const initialState: InitialStateType = {
    isLoading: false,
    searchUserKeyword: "",
    searchUserResult: [],
    recordedUser: [
        {
            dtype: "MEMBER",
            // "MEMBER"
            follwer: true,
            following: true,
            followingMemberFollow: [],
            // "HASHTAG"
            name: "FDASFASD",
            postCount: 12,
        },
        {
            dtype: "MEMBER",
            // "MEMBER"
            follwer: true,
            following: true,
            followingMemberFollow: [],
            // "HASHTAG"
            name: "FDASFASD",
            postCount: 12,
        },
        {
            dtype: "MEMBER",
            // "MEMBER"
            follwer: true,
            following: true,
            followingMemberFollow: [],
            // "HASHTAG"
            name: "FDASFASD",
            postCount: 12,
        },
        {
            dtype: "MEMBER",
            // "MEMBER"
            follwer: true,
            following: true,
            followingMemberFollow: [],
            // "HASHTAG"
            name: "FDASFASD",
            postCount: 12,
        },
    ],
};
const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {
        resetRecordedUser: (state) => {
            state.recordedUser = [];
        },
        changeSearchUser: (state, action: PayloadAction<string>) => {
            state.searchUserKeyword = action.payload;
            if (action.payload === "") {
                state.searchUserResult = [];
            }
        },
    },
    extraReducers(builder) {
        builder.addCase(searchUser.pending, (state) => {
            state.isLoading = true;
        });
    },
});

export const { changeSearchUser, resetRecordedUser } = commonSlice.actions;
export const commonReducer = commonSlice.reducer;
