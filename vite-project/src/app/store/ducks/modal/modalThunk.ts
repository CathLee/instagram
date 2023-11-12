/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-11-11 19:51:53
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-11-11 21:10:48
 * @FilePath: /instagram/vite-project/src/app/store/ducks/modal/modalThunk.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ModalType } from "../../../../@type";
import { authorizedCustomAxios } from "../../../../customAxios";
import { FAIL_TO_REISSUE_MESSAGE } from "../../../../utils/constant";
import { RootState } from "../../store";
import { authAction } from "../auth/authSlice";

export const getMiniProfile = createAsyncThunk<
    ModalType.MiniProfileStateProps,
    {
        memberUsername: string;
        modalPosition: ModalType.ModalPositionProps;
    },
    {
        state: RootState;
    }
>(
    "modal/getMiniProfile",
    async (payload, { getState, dispatch, rejectWithValue }) => {
        const currentMinProfileState: ModalType.MiniProfileStateProps | null =
            getState().modal.miniProfile;
        if (currentMinProfileState?.memberUsername === payload.memberUsername) {
            return {
                ...currentMinProfileState,
                isLoading: false,
                modalPosition: payload.modalPosition,
            };
        }
        try {
            const {
                data: { data },
            } = await authorizedCustomAxios.get(
                `/accounts/${payload.memberUsername}/mini`,
            );
            return {
                ...data,
                isLoading: false,
                modalPosition: payload.modalPosition,
            };
        } catch (error) {
            error === FAIL_TO_REISSUE_MESSAGE && dispatch(authAction.logout());
            throw rejectWithValue(error);
        }
    },
);
