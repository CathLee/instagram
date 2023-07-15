/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-07-15 12:50:11
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-07-15 16:53:49
 * @FilePath: /instagram/vite-project/src/style/UI/Card/Card.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import styled from "styled-components";

interface CardProps {
    isnav?: boolean;
    isarticle?: boolean;
    radius?: string;
}

const Card = styled.div<CardProps>`
    background-color: ${(props) => props.theme.colors.bg_white};
    border: 1px solid
        ${(props) =>
            props.isnav || props.isarticle
                ? "none"
                : props.theme.colors.bd_gray};
    border-radius: ${(props) => (props.isarticle ? "4" : props.radius) + "px"};
    border-bottom: 1px solid
        ${(props) => (props.isnav ? props.theme.color.bd_gray : "none")};
`;

Card.defaultProps = {
    isnav: false,
    isarticle: false,
    radius: "0px",
};
export default Card;
