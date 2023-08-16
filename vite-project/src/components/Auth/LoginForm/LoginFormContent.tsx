/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-07-15 17:06:37
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-08-14 21:56:34
 * @FilePath: /instagram/vite-project/src/components/Auth/LoginForm/LoginFormContent.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */

import { styled } from "styled-components";
import Logo from "../../../assets/images/hello_world.png";

import FacebookLogin from "../FacebookLogin";
import Line from "../Line";
import LoginFormAndButton from "./FormAndButton";
const FormContainer = styled.div`
    .logo-container {
        text-align: center;
    }
    .logo {
        margin-top: 1rem;
        width: 200px;
    }
    .input-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        max-width: 350px;
        width: 100%;
        a {
            margin-top: 12px;
            font-size: 12px;
            line-height: 16px;
            color: #385185;
            width: 100%;
            text-align: center;
            text-decoration: none;
        }
        .inputForm {
            display: flex;
            flex-direction: column;

            .loginForm {
                margin-top: 24px;
                display: flex;
                flex-direction: column;
            }
            .errorMessage {
                color: #ed4956;
                font-size: 14px;
                line-height: 18px;
                text-align: center;
                margin: 10px 40px;
            }
        }
    }
`;

const LoginForm = () => {
    return (
        <>
            <FormContainer>
                <div className="logo-container">
                    <img src={Logo} alt="hello world 的的" className="logo" />
                </div>
                <div className="input-container">
                    <form className="inputForm">
                        <div className="loginForm">
                            <LoginFormAndButton />
                            <Line />
                            <FacebookLogin bgColor="#fff" color="#385185" />
                        </div>
                    </form>
                </div>
            </FormContainer>
        </>
    );
};

export default LoginForm;
