/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-07-15 12:43:58
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-07-15 16:19:52
 * @FilePath: /instagram/vite-project/src/components/ContentBox.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { styled } from "styled-components";
import Card from "../style/UI/Card/Card";
const ContentBox = styled(Card)<UIType.ContentBoxProps>`
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};
    border-radius: 1px;
`;

export default ContentBox;
