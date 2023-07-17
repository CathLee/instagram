/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-07-15 12:24:05
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-07-17 20:59:15
 * @FilePath: /instagram/vite-project/src/@type/index.d.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
declare namespace UIType {
    interface ButtonProps {
        bgColor?: string;
        radius?: number;
        color?: string;
    }
    interface ContentBoxProps {
        margin: string;
        padding: string;
    }
}

declare namespace AuthType {
    interface Token {
        type: string;
        accessToken: string;
    }
}
