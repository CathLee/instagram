/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-07-23 20:46:08
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-07-23 20:50:56
 * @FilePath: /instagram/vite-project/src/components/Auth/SubmitButton.tsx
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import Button from "../../style/UI/Button/Button";
import styled from "styled-components";

const SubmitButton = styled(Button)`
    margin: 8px 40px;
    opacity: 1;
    border: 1px solid transparent;
    &:disabled {
        opacity: 0.3;
        pointer-events: none;
    }
`;

export default SubmitButton;
