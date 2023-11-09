/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-10-27 21:18:01
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-10-29 09:08:39
 * @FilePath: /instagram/vite-project/src/app/store/ducks/home/homeslice.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { createSlice } from "@reduxjs/toolkit";
import { HomeType } from "../../../../@type";
import { getHomeArticle } from "./homeThunks";

const initialState: HomeType.homeStateProps = {
    storiesScrollPosition: "left",
    articles: [],
    isLoading: true,
    isExtraArticleLoading: false,
    extraArticlesCount: 0,
    isAsyncError: false,
    hoveredUser: null,
    isCopiedNotification: false,
};

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        increaseExtraArticlesCount:(state)=>{
            state.extraArticlesCount++
        }
    },
    extraReducers: (bulid) => {
        bulid
            .addCase(getHomeArticle.pending, (state) => {
                state.isLoading = true;
                state.isAsyncError = false;
            })
            .addCase(getHomeArticle.fulfilled, (state, action) => {
                state.articles = action.payload;
                state.isLoading = false;
            });
    },
});

export const homeReducer = homeSlice.reducer;

export const homeAction = homeSlice.actions;
