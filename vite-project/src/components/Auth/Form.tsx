/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-07-15 12:21:46
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-08-14 21:55:03
 * @FilePath: /instagram/vite-project/src/components/Auth/Form.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import styled from "styled-components";
import LoginForm from "./LoginForm/LoginFormContent";
import ContentBox from "../Common/ContentBox";
import { UIType } from "../../@type";
const Container = styled.div<{ pathnamne: string }>`
    display: flex;
    flex-direction: column;
    min-height: ${(props) => (props.pathnamne === "/" ? 0 : 100)}vh;
    margin-top: 12px;
    justify-content: center;
    max-width: 350px;
    flex-grow: 1;
`;
const contentBox: UIType.ContentBoxProps = {
    padding: `10px 0`,
    margin: `0 0 10px`,
};

const Form = (props: { router: "signIn" | "signOut" }) => {
    return (
        <>
            <Container pathname="signIn">
                <ContentBox
                    padding={contentBox.padding}
                    margin={contentBox.margin}
                >
                    {
                        props.router === "signIn" ? <LoginForm />:''
                    }
                </ContentBox>
            </Container>
        </>
    );
};

export default Form;
