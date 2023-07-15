/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-07-15 12:58:02
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-07-15 16:10:23
 * @FilePath: /instagram/vite-project/src/style/styled.d.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            bg_gray: string;
            bg_white: string;
            bd_gray: string;
            blue: string;
        };
    }
}
