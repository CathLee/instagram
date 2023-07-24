/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-07-23 20:46:50
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-07-24 21:51:32
 * @FilePath: /instagram/vite-project/src/style/UI/Button/Button.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { styled } from "styled-components";

import { UIType } from "../../../@type";
const Button = styled.button<UIType.ButtonProps>`
    padding: 5px 9px;
    border-radius: ${(props) => props.radius}px;
    background-color: ${(props) => props.bgColor || props.theme.color.blue};
    color: ${(props) => props.color};
`;

Button.defaultProps = {
    radius: 4,
    color: "#fff",
};
export default Button;