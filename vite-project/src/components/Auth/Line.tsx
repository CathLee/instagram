/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-07-17 20:51:04
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-07-17 21:00:05
 * @FilePath: /instagram/vite-project/src/components/Auth/Line.tsx
 * @Description: 分割线组件
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import styled from "styled-components";
// $ > span  是指子元素是span标签的元素

const LineStyle = styled.div<{ margin?: string }>`
    margin: ${(props) => props.margin};
    display: flex;

    & > span {
        color: #8e8e8e;
        font-size: 13px;
        font-weight: ${(props) => props.theme.font.bold};
        margin: 0 18px;
        line-height: 15px;
    }

    & > div {
        background-color: ${(props) => props.theme.color.bd_gray};
        height: 1px;
        flex-grow: 1;
        flex-shrink: 1;
        top: 0.45em;
        position: relative;
    }
`;

const Line = (props: { margin?: string }) => {
    return (
        <LineStyle margin={props.margin}>
            <div />
            <span>哈哈哈</span>
            <div />
        </LineStyle>
    );
};

export default Line;
