/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-10-27 21:33:05
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-10-29 15:38:26
 * @FilePath: /instagram/vite-project/src/app/store/ducks/home/homeThunks.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostType } from "../../../../@type";
import { customAxios } from "../../../../customAxios";
import { FAIL_TO_REISSUE_MESSAGE } from "../../../../utils/constant";
import { authAction } from "../auth/authSlice";
import { homeAction } from "./homeslice";
import { ExtraArticleProps, RecentArticlesProps } from "./homeThunk.type";

export const getHomeArticle = createAsyncThunk<PostType.ArticleStateProps[]>(
    "home/getHomeArticles",
    async (payload, ThunkOptions) => {
        try {
            // const {
            //     data: { data },
            // }: RecentArticlesProps = await customAxios.get(`/posts/recent`);

            const {
                data:{data}
            }: RecentArticlesProps  = {
                "data":{
                    "data": [
                    {
                        "postId": 32,
                        "postContent": "tailwindCSS로 스타일링했는데\r\n배포서버에서 스타일적용안되는 부분이 있어서 \r\n프로필 이미지가 짱 커짐 \r\nㅋㅋㅋㅋㅋㅋㅋ\r\n\r\n웃기긴한데......\r\n왜 안됐던거지?! \r\n\r\n#tailwindCSS #style\r\n",
                        "mentionsOfContent": [],
                        "hashtagsOfContent": [
                            "style",
                            "tailwindCSS"
                        ],
                        "postImages": [
                            {
                                "id": 10,
                                "postImageUrl": "https://instagram-s3-dev.s3.ap-northeast-2.amazonaws.com/post/6528c050-a96b-413f-842d-b9f15d300a50_file0.PNG",
                                "altText": "Photo by 에러야사라져랏 with noError",
                                "postTags": null
                            },
                            {
                                "id": 11,
                                "postImageUrl": "https://instagram-s3-dev.s3.ap-northeast-2.amazonaws.com/post/526b20d9-96a7-4cb0-8adb-54c4de4c39aa_file1.PNG",
                                "altText": "Photo by 에러야사라져랏 with noError",
                                "postTags": null
                            }
                        ],
                        "postUploadDate": "2023-02-06T17:54:40",
                        "member": {
                            "id": 5,
                            "username": "noError",
                            "name": "에러야사라져랏",
                            "image": {
                                "imageUrl": "https://instagram-s3-dev.s3.ap-northeast-2.amazonaws.com/member/e0a5a8e4-31b5-4246-a0f6-7def60e32445_%E1%84%8D%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%AE%E1%86%BA%E1%84%80%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%A6%E1%84%85%E1%85%A5.PNG",
                                "imageType": "PNG",
                                "imageName": "짱웃긴에러",
                                "imageUUID": "e0a5a8e4-31b5-4246-a0f6-7def60e32445"
                            },
                            "hasStory": false
                        },
                        "postCommentsCount": 0,
                        "postLikesCount": 2,
                        "postBookmarkFlag": false,
                        "postLikeFlag": false,
                        "commentOptionFlag": false,
                        "likeOptionFlag": false,
                        "followingMemberUsernameLikedPost": "",
                        "recentComments": [],
                        "following": true
                    },
                    {
                        "postId": 31,
                        "postContent": "전자기기 리뷰사이트 HIT ! \r\n모바일뷰에서, 닉네임 UI 깨진다 !!! \r\n\r\nhttps://how-about-it.netlify.app/\r\n\r\n닉네임 UI에 flex: 1 주는게 맞나..? \r\n엄청 긴 닉네임이라면 ? \r\n그래서 닉네임 글자수 제한 두는건가 \r\n\r\n흐으음 \r\n뭐가 좋지?",
                        "mentionsOfContent": [],
                        "hashtagsOfContent": [],
                        "postImages": [
                            {
                                "id": 9,
                                "postImageUrl": "https://instagram-s3-dev.s3.ap-northeast-2.amazonaws.com/post/c57428c0-0e3b-46b1-a3d6-1dff75c25271_file0.PNG",
                                "altText": "Photo by 에러야사라져랏 with noError",
                                "postTags": null
                            }
                        ],
                        "postUploadDate": "2023-02-06T17:51:38",
                        "member": {
                            "id": 5,
                            "username": "noError",
                            "name": "에러야사라져랏",
                            "image": {
                                "imageUrl": "https://instagram-s3-dev.s3.ap-northeast-2.amazonaws.com/member/e0a5a8e4-31b5-4246-a0f6-7def60e32445_%E1%84%8D%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%AE%E1%86%BA%E1%84%80%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%A6%E1%84%85%E1%85%A5.PNG",
                                "imageType": "PNG",
                                "imageName": "짱웃긴에러",
                                "imageUUID": "e0a5a8e4-31b5-4246-a0f6-7def60e32445"
                            },
                            "hasStory": false
                        },
                        "postCommentsCount": 0,
                        "postLikesCount": 1,
                        "postBookmarkFlag": false,
                        "postLikeFlag": false,
                        "commentOptionFlag": false,
                        "likeOptionFlag": false,
                        "followingMemberUsernameLikedPost": "",
                        "recentComments": [],
                        "following": true
                    },
                    {
                        "postId": 30,
                        "postContent": "yorkie go build cmd \r\n\r\n#yorkie ",
                        "mentionsOfContent": [],
                        "hashtagsOfContent": [
                            "yorkie"
                        ],
                        "postImages": [
                            {
                                "id": 8,
                                "postImageUrl": "https://instagram-s3-dev.s3.ap-northeast-2.amazonaws.com/post/9923f3cb-eaa5-4492-a307-dc141a05369e_file0.PNG",
                                "altText": "Photo by 에러야사라져랏 with noError",
                                "postTags": null
                            }
                        ],
                        "postUploadDate": "2023-02-06T17:49:14",
                        "member": {
                            "id": 5,
                            "username": "noError",
                            "name": "에러야사라져랏",
                            "image": {
                                "imageUrl": "https://instagram-s3-dev.s3.ap-northeast-2.amazonaws.com/member/e0a5a8e4-31b5-4246-a0f6-7def60e32445_%E1%84%8D%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%AE%E1%86%BA%E1%84%80%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%A6%E1%84%85%E1%85%A5.PNG",
                                "imageType": "PNG",
                                "imageName": "짱웃긴에러",
                                "imageUUID": "e0a5a8e4-31b5-4246-a0f6-7def60e32445"
                            },
                            "hasStory": false
                        },
                        "postCommentsCount": 0,
                        "postLikesCount": 1,
                        "postBookmarkFlag": false,
                        "postLikeFlag": false,
                        "commentOptionFlag": false,
                        "likeOptionFlag": false,
                        "followingMemberUsernameLikedPost": "",
                        "recentComments": [],
                        "following": true
                    },
                    {
                        "postId": 29,
                        "postContent": "유튜브 만들다가 만난 typescript 에러 \r\n\r\n#ts타입시스템 #별로",
                        "mentionsOfContent": [],
                        "hashtagsOfContent": [
                            "ts타입시스템",
                            "별로"
                        ],
                        "postImages": [
                            {
                                "id": 7,
                                "postImageUrl": "https://instagram-s3-dev.s3.ap-northeast-2.amazonaws.com/post/5813a3c7-7ea7-4e05-a4b7-e96d2af2a591_file0.PNG",
                                "altText": "Photo by 에러야사라져랏 with noError",
                                "postTags": null
                            }
                        ],
                        "postUploadDate": "2023-02-06T17:47:41",
                        "member": {
                            "id": 5,
                            "username": "noError",
                            "name": "에러야사라져랏",
                            "image": {
                                "imageUrl": "https://instagram-s3-dev.s3.ap-northeast-2.amazonaws.com/member/e0a5a8e4-31b5-4246-a0f6-7def60e32445_%E1%84%8D%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%AE%E1%86%BA%E1%84%80%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%A6%E1%84%85%E1%85%A5.PNG",
                                "imageType": "PNG",
                                "imageName": "짱웃긴에러",
                                "imageUUID": "e0a5a8e4-31b5-4246-a0f6-7def60e32445"
                            },
                            "hasStory": false
                        },
                        "postCommentsCount": 0,
                        "postLikesCount": 0,
                        "postBookmarkFlag": false,
                        "postLikeFlag": false,
                        "commentOptionFlag": false,
                        "likeOptionFlag": false,
                        "followingMemberUsernameLikedPost": "",
                        "recentComments": [],
                        "following": true
                    }
                ]
                }
            }
            const artclesState: PostType.ArticleStateProps[] = data.map(
                (article: PostType.ArticleProps) => {
                    return {
                        ...article,
                        followLoading: false,
                    };
                },
            );
            return artclesState;
        } catch (err) {
            console.log(err);
            return ThunkOptions.rejectWithValue(err);
        }
    },
);

export const getExtraArticle = createAsyncThunk<
    PostType.ArticleStateProps,
    {
        page: number;
    }
>("home/getExtraArticle", async (payload, ThunkOptions) => {
    const config = {
        params: {
            page: payload.page,
        },
    };
    try {
        const {
            data: {
                data: { content: data, empty },
            },
        }: ExtraArticleProps = await customAxios.get(
            `/posts`,
            config,
        ); 

        if (empty) {
            throw ThunkOptions.rejectWithValue(
                "게시물이 더 이상 존재하지 않습니다.",
            );
        }
        ThunkOptions.dispatch(homeAction.increaseExtraArticlesCount());
        const articleState: PostType.ArticleStateProps = {
            ...data[0],
            // isFollowing: true,
            followLoading: false,
        };
        return articleState;
    } catch (error) {
        error === FAIL_TO_REISSUE_MESSAGE &&
            ThunkOptions.dispatch(authAction.logout());
        throw ThunkOptions.rejectWithValue(error);
    }
});
