/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-10-28 17:58:54
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-10-29 15:38:08
 * @FilePath: /instagram/vite-project/src/app/store/ducks/home/homeThunl.type.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
// fetch data type

import { PostType } from "../../../../@type"


export interface RecentArticlesProps {
    data: {
        data: PostType.ArticleProps[];
    };
}

export interface ExtraArticleProps {
    data: {
        data: {
            content:PostType.ArticleProps[];
            empty: boolean;
        };
    };
}