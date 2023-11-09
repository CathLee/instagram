/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-10-29 15:43:39
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-10-29 16:14:08
 * @FilePath: /instagram/vite-project/src/components/Common/Article/ArticleHeader.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { styled } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../app/store/Hooks";

const StyledArticleHeader = styled.header`
    height: 60px;
    padding: 16px;
    display: flex;
    align-items: center;
    position: relative;
    border-bottom: 1px solid ${(props) => props.theme.color.bg_gray};
    .header-content {
        flex: 1;
        margin-left: 14px;
        a {
            text-decoration: none;
            display: block;
        }
        & > a {
            font-size: 12px;
            line-height: 15px;
            cursor: pointer;
        }
        & > .header-mainContent {
            display: flex;
        }
        .header-followBox {
            display: flex;
            align-items: center;
            & > span {
                margin: 0 4px;
            }
            & > button {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-left: 2px;
                color: ${(props) => props.theme.color.blue};
            }
        }
    }
    .header-dots {
        position: absolute;
        right: 4px;
        top: 50%;
        transform: translateY(-50%);
        width: 24px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
`;

interface ArticleHeaderProps {
    memberImageUrl: string;
    memberUsername: string;
    postId: number;
    location?: string;
    isFollowing: boolean;
    followLoading: boolean;
}

const HEADER_STORY_CIRCLE = 42 / 64;

const ArticleHeader = ({
    memberImageUrl,
    memberUsername,
    postId,
    location,
    isFollowing,
    followLoading,
}: ArticleHeaderProps) => {
    const myUsername = useAppSelector(
        (state) => state.auth.userInfo?.memberUsername,
    );
    const dispath = useAppDispatch();

    const mouseEnterHandler = async (
        event: React.MouseEvent<HTMLSpanElement | HTMLDivElement>,
    ) => {
        if (!event) return;
        const {top,bottom,left} = event.currentTarget.getBoudingclientRect()
        await dispath(
            getMiniProfile({
                memberUsername,
                modalPosition:{top,bottom,left},
            })
        )
    };
};
function getMiniProfile(arg0: { memberUsername: string; modalPosition: { top: any; bottom: any; left: any; }; }): any {
    throw new Error("Function not implemented.");
}

