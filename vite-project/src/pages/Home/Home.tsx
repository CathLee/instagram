/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-08-20 09:58:34
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-10-16 20:45:01
 * @FilePath: /instagram/vite-project/src/pages/Home/Home.tsx
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-08-20 09:58:34
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-10-16 20:43:51
 * @FilePath: /instagram/vite-project/src/pages/Home/Home.tsx
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { useAppDispatch } from "../../app/store/Hooks"
import { styled } from "styled-components";
import HomeSection from "../../components/Home/HomeSection";

const Layout = styled.div`
    padding-top: 30px;
    width: 100%;
    max-width: 935px;
    margin: 0 auto;
    display: flex;
    main {
        width: 100%;
        max-width: 614px;
        margin-right: 28px;
        display: flex;
        flex-direction: column;
    }
    @media (max-width: 1000px) {
        max-width: 600px;
        main {
            margin-right: 0;
        }
    }
`;

const Home = () => {
  const dispatch = useAppDispatch()
  return (
    <Layout>
      <main><HomeSection /></main>
    </Layout>
  )
}

export default Home