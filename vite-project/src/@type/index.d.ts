import { ChangeEvent } from "react";
/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-07-15 12:24:05
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-08-27 14:57:06
 * @FilePath: /instagram/vite-project/src/@type/index.d.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
declare namespace UIType {
    interface ButtonProps {
        bgColor?: string;
        radius?: number;
        color?: string;
    }
    interface ContentBoxProps {
        margin: string;
        padding: string;
    }
}

// 用户鉴权相关信息
declare namespace AuthType {
    interface useInputProps {
        value: string;
        onChange: (event: ChangeEvent<HTMLInputElement>) => void;
        onBlur?: () => void;
        onFocus?: () => void;
    }
    interface Token {
        type: string;
        accessToken: string;
    }
    interface InputProps {
        inputName: "email" | "name" | "username" | "password" | "id" | "code";
        innerText: string;
        type: "text" | "password";
        inputProps: useInputProps;
        isValid?: boolean;
        isFocus?: boolean;
        hasValidator?: (value: string) => boolean;
    }
}

// 通用类型
declare namespace CommonType {
    interface ImageProps {
        width: number;
        height: number;
        position: string;
        url: string;
        size?: string;
    }
    interface memberType {
        id: number;
        username: string;
        name: string;
        image: ImageInfo;
        hasStory: boolean;
    }
    interface searchResultType {
        dtype: "MEMBER" | "HASHTAG";

        // "MEMBER"
        follwer?: boolean;
        following?: boolean;
        followingMemberFollow?: { memberUsername: string }[];
        member?: memberType;

        // "HASHTAG"
        name?: string;
        postCount?: number;
    }
}

// 弹窗类型
declare namespace ModalType {
    // 激活的弹窗类型
    type ActivatedModalType =
        | "unfollowing"
        | "report"
        | "articleMenu"
        | "commentMenu"
        | "shareWith"
        | null;
    // 用户信息弹窗类型
    interface MiniProfileProps {
        blocked: boolean;
        blocking: boolean;
        follower: boolean;
        following: boolean;
        hasStory: boolean;
        //我关注的 1 位关注此用户的代表
        followingMemberFollow: [
            {
                memberUsername: string;
            },
        ];
        followingMemberFollowCount: number; // 除上述成员外的剩余成员人数
        me: boolean;
        memberFollowersCount: number; // 关注用户的人
        memberFollowingsCount: number; // 用户关注的每个人
        memberPostsCount: number; // 帖子数量
        memberImage: {
            imageUrl: string;
            imageType: string;
            imageName: string;
            imageUUID: string;
        };
        memberName: string;
        // 后面的[]表示当前数组中的每一项都是一个对象，对象中有两个属性，postId和postImageUrl
        memberPosts: { postId: number; postImageUrl: string }[]; // string
        memberUsername: string;
        memberWebsite: null | string;
    }
    interface MiniProfileStateProps extends MiniProfileProps {
        isLoading: boolean;
        modalPosition: ModalPositionProps;
    }

    interface ModalStateProps {
        activatedModal: ActivatedModalType;
        memberUsername: string; // dlwlrma
        memberImageUrl: string;
        postId: number | null;
        commentId: number | null;
        miniProfile: MiniProfileStateProps | null;
        isFollowing: boolean | null;
        isOnMiniProfile: boolean;
        isArticleAloneModalOn: boolean;
        articleAloneModalPostId: number | null;
    }
}
