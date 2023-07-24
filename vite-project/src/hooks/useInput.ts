/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-07-18 20:20:17
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-07-23 20:43:27
 * @FilePath: /instagram/vite-project/src/hooks/useInput.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */

import { AuthType } from "../@type";
import { useState } from "react";
import {usernameValidator} from "../components/Auth/SignUpForm/validator";
import { customAxios } from "../customAxios";
import { ChangeEvent } from "react";
type ReturnType = [AuthType.useInputProps, boolean | null, boolean, () => void];

const useInput = (
    initialValue: string,
    onBlurValidator?: (value: string) => boolean,
    onChangeValidator?: (value: string) => boolean,
): ReturnType => {
    const [value, setValue] = useState(initialValue);
    const [isValid, setIsValid] = useState<boolean | null>(null);
    const [isFocus, setIsFocus] = useState(false);
    const onFocus = () => {
        setIsFocus(true);
        onBlurValidator && !isValid && setIsValid(null);
    };
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();
        setValue(value);
        onChangeValidator && setIsValid(onChangeValidator(value));
    };

    const resetValue = () => setValue("");

    const onBlur = () => {
        setIsFocus(false);
        if (onBlurValidator) {
            const result = onBlurValidator(value);
            setIsValid(result);
            // 用户名长度校验
            if (onBlurValidator === usernameValidator) {
                // 长度校验无误，则进行唯一性校验
                const usernameDispatch = async (username: string) => {
                    try {
                        const config = {
                            params: {
                                username,
                            },
                        };
                        const { data } = await customAxios.get(
                            `/accounts/check`,
                            config,
                        );
                        setIsValid(data);
                    } catch (err) {
                        console.log(err);
                        setIsValid(null);
                    }
                };
                result && usernameDispatch(value);
            }
        }
    };

    return [
        onBlurValidator || onChangeValidator
            ? { value, onChange, onBlur, onFocus }
            : { value, onChange },
        isValid,
        isFocus,
        resetValue,
    ];
};

export default useInput;
