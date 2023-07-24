/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-07-18 20:53:54
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-07-23 21:07:06
 * @FilePath: /instagram/vite-project/src/components/Auth/SignUpForm/validator.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */

/**
 * @description: 输入框长度校验
 * @return {*}
 */
const lengthScopeValidator = (
    value: string,
    min: number,
    max: number,
): boolean => {
    const length = value.length;
    return length >= min && length <= max;
};

export const usernameValidator = (username: string): boolean|undefined => {
    if (!lengthScopeValidator(username, 4, 12)) return false;
};
