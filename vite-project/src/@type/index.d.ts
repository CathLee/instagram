
import { ChangeEvent } from "react";
/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-07-15 12:24:05
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-07-23 20:43:51
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
    interface useInputProps {
        value: string;
        onChange: (event: ChangeEvent<HTMLInputElement>) => void;
        onBlur?: () => void;
        onFocus?: () => void;
    }
    interface Token {
        type: string;
        accessToken: string;
    }
    interface InputProps {
        inputName: "email" | "name" | "username" | "password" | "id" | "code";
        innerText: string;
        type: "text" | "password";
        inputProps: useInputProps;
        isValid?: boolean;
        isFocus?: boolean;
        hasValidator?: (value: string) => boolean;
    }
}

declare namespace CommonType {
    interface ImageProps {
        width: number;
        height: number;
        position: string;
        url: string;
        size?: string;
    }
}
