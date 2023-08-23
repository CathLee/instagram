/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-08-20 09:49:40
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-08-20 21:41:03
 * @FilePath: /instagram/vite-project/src/components/Common/Header/Header.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */

import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../../assets/images/hello_world.png";
import SearchBar from "./SearchBar";


const HeaderContainer = styled.div`
    dispaly: flex;
    align-items: center;
    juestify-content: center;

    background-color: #fff;
    background-color: rgba(var(--d87, 255, 255, 255), 1);
    border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
    height: 54px;
    position: fixed;
    top: 0;

    width: 100%;
    z-index: 101;
`;

const HeaderContentsWrapper = styled.div`
    display: flex;
    align-items: center;

    padding: 0 20px;
    width: 100%;
    max-width: 975px;
`;

const LogoWrapper = styled(NavLink)`
    display: inline-flex;
    align-items: center;
    flex: 1 9999 0%;
    min-width: 40px;

    img {
        width: 110px;
    }
`;
const Header = () => {
    return (
        <>
            <HeaderContainer>
                <HeaderContentsWrapper>
                    <LogoWrapper to="/">
                        <img src={Logo} alt="hello world 로고" />
                    </LogoWrapper>
                    <SearchBar />
                </HeaderContentsWrapper>
            </HeaderContainer>
        </>
    );
};

export default Header;
