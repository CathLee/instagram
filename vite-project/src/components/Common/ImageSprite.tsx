/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-07-23 18:56:44
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-07-23 19:11:28
 * @FilePath: /instagram/vite-project/src/components/Common/ImageSprite.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { styled } from "styled-components";
import { CommonType } from "../../@type";
const ImageSprite = styled.div<CommonType.ImageProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background: ${(props) => `url(${props.url}) no-repeat`};
    backgroun-postion: ${(props) => props.position};
    background-size: ${(props) => props.size && `${props.size}`};
`;
export default ImageSprite;
