/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-10-16 20:39:14
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-10-29 09:29:11
 * @FilePath: /instagram/vite-project/src/components/Home/HomeSection.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { useEffect } from "react";
import { getHomeArticle } from "../../app/store/ducks/home/homeThunks";
import { useAppDispatch, useAppSelector } from "../../app/store/Hooks";
import Article from "../Common/Article/Article";
const HomeSection = () => {
    const { articles, isLoading, isExtraArticleLoading } = useAppSelector(
        (state) => state.home,
    );

    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getHomeArticle());
        };

        fetchData();
    }, [dispatch]);
    return (
        <section>
            {isLoading ||
                articles.map((article, index) => (
                    <Article
                        key={article.postId}
                        article={article}
                        isObserving={articles.length - 4 === index}
                    />
                ))}
        </section>
    );
};

export default HomeSection;
