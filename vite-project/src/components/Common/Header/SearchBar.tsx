/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-08-20 21:32:58
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-10-16 20:12:09
 * @FilePath: /instagram/vite-project/src/components/Common/Header/SearchBar.tsx
 * @Description: 搜索框
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { RefObject, useRef, useState } from "react";
import styled from "styled-components";
import {
    getSearchRecord,
    searchUser,
} from "../../../app/store/ducks/common/commonThunk";
import { useAppDispatch, useAppSelector } from "../../../app/store/Hooks";
import theme from "../../../style/themes";
import sprite from "../../../assets/images/sprite.png";
import { authorizedCustomAxios } from "../../../customAxios";
import {
    changeSearchUser,
    resetRecordedUser,
} from "../../../app/store/ducks/common/commonSlice";
import SearchListItem from "../../Home/SearchListItem";

const SearchBarContainer = styled.div`
    position: relative;
    display: flex;
    flex: 0 1 auto;

    height: 28px;
    min-width: 125px;
    width: 215px;
    .search-bar {
        padding: 3px 16px;
        border-radius: 8px;
        padding-left: 30px;
    }

    .arrow {
        position: absolute;

        top: 34px;
        width: 14px;
        height: 14px;
        left: 85px;
        right: 0;
        transform: rotate(45deg);
        box-shadow: 0 0 5px 1px rgba(var(--jb7, 0, 0, 0), 0.0975);
        background-color: ${theme.color.bg_white};
    }

    .search-list {
        position: absolute;
        transform: translate3d(-94px, 0, 0);
        top: 42px;
        width: 375px;
        min-height: 362px;
        background-color: ${theme.color.bg_white};
        padding-top: 12px;
        overflow-y: scroll;
        border-radius: 10px;

        /* 最近搜索 */

        .recent-container {
            display: flex;
            flex-direction: column;
            width: 100%;
            .header {
                padding: 8px 16px;
                display: flex;
                justify-content: space-between;

                .search-text {
                    font-size: 16px;
                    font-weight: 700;
                }

                .remove-text {
                    color: ${theme.color.blue};
                    font-weight: 700;
                }
            }
        }

        .no-data-alert {
            display: flex;
            justify-content: center;
            span {
                margin-top: 150px;
                color: ${theme.font.gray};
            }
        }
    }
`;

const SearchIcon = styled.div`
    position: absolute;
    top: 9px;
    left: 15px;
    background: url(${sprite}) no-repeat -553px -84px;
    width: 10px;
    height: 10px;
`;

const SearchBar = () => {
    const ref: RefObject<HTMLDivElement> = useRef(null);
    const inputRef: RefObject<HTMLInputElement> = useRef(null);
    const [isFocus, setIsFocused] = useState(false);

    const searchUserKeyword = useAppSelector(
        (state) => state.common.searchUserKeyword,
    );

    const recordedUser = useAppSelector((state) => state.common.recordedUser);
    const dispatch = useAppDispatch();
    const removeAllRecordHandler = async () => {
        const result = await authorizedCustomAxios.delete("/deleteAllRecord");
        dispatch(resetRecordedUser);
        alert(result.data.message);
    };
    return (
        <SearchBarContainer
            ref={ref}
            onClick={() => {
                setIsFocused(true);
                dispatch(getSearchRecord());
            }}
        >
            <label htmlFor="search">
                <SearchIcon />
            </label>
            <input
                id="search"
                ref={inputRef}
                type="text"
                className="search-bar"
                value={searchUserKeyword}
                onChange={async (e) => {
                    dispatch(changeSearchUser(e.target.value));
                    if (e.target.value !== "") {
                        await dispatch(searchUser({ keyword: e.target.value }));
                    }
                }}
                placeholder="搜索"
            />
            {isFocus && (
                <>
                    {/* 最近的搜索 */}
                    <div className="arrow" />
                    <div className="search-list">
                        {searchUserKeyword === "" && (
                            <div className="recent-container">
                                <div className="header">
                                    <span className="search-text">
                                        最近的搜索
                                    </span>
                                    <button
                                        className="remove-text"
                                        onClick={removeAllRecordHandler}
                                    >
                                        全部清除
                                    </button>
                                </div>

                                <>
                                    {
                                        recordedUser.map((i)=>(
                                            <div>{i.name}</div>
                                        ))
                                    }
                                    {recordedUser.map((item) => (
                                        <SearchListItem
                                            key={
                                                item.member?.username ||
                                                item.name
                                            }
                                            {...item}
                                            setIsFocused={setIsFocused}
                                        ></SearchListItem>
                                    ))}
                                </>
                            </div>
                        )}
                    </div>
                </>
            )}
        </SearchBarContainer>
    );
};

export default SearchBar;
