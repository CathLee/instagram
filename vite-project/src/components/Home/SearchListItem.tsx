/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-08-27 13:29:45
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-08-27 15:02:59
 * @FilePath: /instagram/vite-project/src/components/Home/SearchListItem.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */

import { Dispatch, SetStateAction } from "react";
import { CommonType } from "../../@type";
import { useAppDispatch } from "../../app/store/Hooks";
import CloseSVG from "../../assets/Svg/close.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { authorizedCustomAxios } from "../../customAxios";
import SearchListItemLayout from "./SearchListItemLayout";
import theme from "../../style/themes";
import { getSearchRecord } from "../../app/store/ducks/common/commonThunk";
interface SearchListItemProps extends CommonType.searchResultType {
    setIsFocused: Dispatch<SetStateAction<boolean>>;
    button?: boolean;
}

const Container = styled.div`
    display: flex;
    width: 100%;
    a {
        display: flex;
        width: 328px;
        align-items: center;
        gap: 20px;
        height: 60px;
        cursor: pointer;
        text-decoration: none;
    }
    .close-button {
        flex: 1;
    }
`;

const SearchListItem = ({
    dtype,
    member,
    followingMemberFollow,
    setIsFocused,
    button,
    name,
    postCount,
}: SearchListItemProps) => {
    // 当前的用户信息config
    const config = {
        params: {
            entityName: member?.username || `#${name}`,
            entityType: dtype,
        },
    };
    const dispatch = useAppDispatch();
    // 单击某人即可转到该人的个人资料或单击主题标签
    const itemClickHandler = async () => {
        // 用户点击量增加
        await authorizedCustomAxios.post("/topsearch/mark", null, config);
        // 修改搜索模态框的状态
        setIsFocused(false);
    };

    // 删除最近搜索的一个人
    const removeUserHandler = async () => {
        await authorizedCustomAxios.delete("/topsearch/recent", config);
        await dispatch(getSearchRecord());
    };
    return (
        <Container>
            {dtype === "MEMBER" && member ? (
                <Link
                    to={`/profile/${member.username}`}
                    onClick={itemClickHandler}
                >
                    <SearchListItemLayout
                        member={member}
                        followingMemberFollow={followingMemberFollow}
                    />
                </Link>
            ) : (
                <Link to={`/hashtag/${name}`} onClick={itemClickHandler}>
                    <SearchListItemLayout name={name} postCount={postCount} />
                </Link>
            )}

            {button && (
                <button onClick={removeUserHandler} className="close-button">
                    <CloseSVG color={theme.font.gray} size={"18"} />
                </button>
            )}
        </Container>
    );
};

export default SearchListItem;
