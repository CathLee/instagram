/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-10-28 21:44:50
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-10-29 09:48:53
 * @FilePath: /instagram/vite-project/src/components/Common/Article/Article.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { PostType } from "../../../@type";
import { getExtraArticle } from "../../../app/store/ducks/home/homeThunks";
import { useAppDispatch, useAppSelector } from "../../../app/store/Hooks";
import Card from "../../../style/UI/Card/Card";

interface ArticleCardProps {
    isModal: boolean;
}

interface ArticleComponentPros {
    article: PostType.ArticleStateProps;
    isObservering: boolean;
    isModal?: boolean;
}

// 文章外部样式

const ArticleCard = styled(Card)<ArticleCardProps>`
    margin-bottom: ${({ isModal }) => (isModal ? 0 : "2px")};
`;

const Article = ({ article, isObserving, isModal = false }:ArticleComponentPros) => {
    const [isLiked, setIsLiked] = useState(article.postLikeFlag);
    const [likesCount, setLikeCounts] = useState(article.postLikesCount);
    const articleRef = useRef<HTMLDivElement>(null);
    // useAppSelector 最终选择了整个 home 属性作为它的返回值。
    const { extraArticlesCount } = useAppSelector(({ home }) => home);
    const dispatch = useAppDispatch();
    useEffect(() => {
        const dispatchExtraArticle = async () => {
            try {
                await dispatch(
                    getExtraArticle({
                        page: extraArticlesCount + 1,
                    }),
                );
            } catch (err) {
                console.log(err);
            }
        };
        console.log("hola");
        
    }, [dispatch]);

    return (
        // as="article" 表示 ArticleCard 组件应该被渲染成一个 <article> 元素。

        <ArticleCard
            as="article"
            ref={articleRef}
            isModal={isModal}
        >

            
        </ArticleCard>
    );
};

export default Article;
