/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-07-15 09:47:21
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-08-20 16:16:13
 * @FilePath: /instagram/vite-project/src/pages/Landing/index.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */

import Form from "../../components/Auth/Form";
import styled from "styled-components";
import {ShowingInstagram} from "../../components/Auth/InstagramImageSlider";
import { useAppSelector } from "../../app/store/Hooks";
const Container = styled.section`
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    .container {
        display: flex;
        justify-content: center;
        padding-bottom: 32px;
        margin: 32px auto 0;
        width: 100%;
        max-width: 935px;
        flex-grow: 1;
    }

    .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 12px;
        max-width: 350px;
        flex-grow: 1;
    }
`;
const Landing: React.FC = () => {
    const isLogin = useAppSelector((state) => state.auth.isLogin);
    return (
        <>
            <Container>
            
                <main className="container">

                <ShowingInstagram />
                    <div className="form">
                        {isLogin?"fdsfasd":"aaaa"}
                        <Form router="signIn"></Form>
                    </div>
                </main>
            </Container>
        </>
    );
};

export default Landing;
