/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-07-17 20:49:26
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-08-12 11:05:30
 * @FilePath: /instagram/vite-project/src/components/Auth/LoginForm/FormAndButton.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */

import axios from "axios";
import { MouseEvent } from "react";
import { signIn } from "../../../app/store/ducks/auth/authThunk";
import { useAppDispatch } from "../../../app/store/Hooks";
import useInput from "../../../hooks/useInput";
import Input from "../../Common/Input";
import SubmitButton from "../SubmitButton";

const placeholder = {
    username: "请输入姓名",
    password: "请输入密码",
};

const LoginFormAndButton =  () => {
    const [usernameInputProps, usernameIsValid, usernameIsFocus] = useInput(
        "",
        undefined,
        (value) => value.length > 0,
    );
    const [passwordInputProps, passwordIsValid, passwordIsFocus] = useInput(
        "",
        undefined,
        (value) => value.length > 5,
    );

    const dispatch = useAppDispatch();
    const submitButtonClickHandler = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const requestSignIn = async () => {
            await dispatch(
                signIn({
                    username: usernameInputProps.value,
                    password: passwordInputProps.value,
                }),
            );
        };
        const res = await axios.get("http://192.168.0.104:8080/api/users");
        console.log(res);
        
        requestSignIn();
    };
    return (
        <>
            <Input
                type="text"
                inputName="username"
                innerText={placeholder.username}
                inputProps={usernameInputProps}
                isFocus={usernameIsFocus}
            ></Input>
            <Input
                type="password"
                inputName="password"
                innerText={placeholder.password}
                inputProps={passwordInputProps}
                isFocus={passwordIsFocus}
            />
            <SubmitButton type="submit" onClick={submitButtonClickHandler}>
                登录
            </SubmitButton>
        </>
    );
};

export default LoginFormAndButton;
