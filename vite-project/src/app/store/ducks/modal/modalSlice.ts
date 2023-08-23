/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-08-20 08:58:05
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-08-20 09:19:50
 * @FilePath: /instagram/vite-project/src/app/store/ducks/modal/modalSlce.ts
 * @Description: 用户信息hover的弹窗
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalType } from "../../../../@type";

const initialState: ModalType.ModalStateProps = {
    activatedModal: null,
    memberUsername: "",
    memberImageUrl: "",
    postId: null,
    commentId: null,
    miniProfile: null,
    isFollowing: null,
    isOnMiniProfile: false,
    isArticleAloneModalOn: false,
    articleAloneModalPostId: null,
};
// 当前hover的用户信息
interface HoverModalPayloadType {
    memberUsername: string;
    memberImageUrl: string;
}
const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        startHoverModal(state, actions:PayloadAction<HoverModalPayloadType>) {
            state.isOnMiniProfile = true;
            state.activatedModal = null;
            state.memberUsername = actions.payload.memberUsername;
            state.memberImageUrl = actions.payload.memberImageUrl;
        },
    },
});

export const modalAction = modalSlice.actions;
