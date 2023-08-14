import { styled } from "styled-components";
import PhoneImg from "../../assets/images/slider/home_phone.png";

import home from "../../assets/images/slider/home.jpeg";
import Edit from "../../assets/images/slider/image_edit.jpeg";
import takephoto from "../../assets/images/slider/take_photo.jpeg";
import talk from "../../assets/images/slider/talk.jpeg";
import InstagramImg from "../../assets/images/slider/instagram.jpeg";
import { useEffect, useState } from "react";
/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-08-13 18:09:12
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-08-14 21:15:22
 * @FilePath: /instagram/vite-project/src/components/Auth/InstagramImageSlider.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
const SliderContainer = styled.div`
background-image: url(${PhoneImg});
    background-size: 454px 618px;
    height: 618px;
    margin-left: -35px;
    margin-right: -15px;
    flex-basis: 454px;
    align-self: center;
    @media (max-width: 875px) {
        display: none;
    }

    .slider {
        margin: 99px 0 0 151px;
    }
`;

interface imageStateProps {
    show?: boolean;
    background?: boolean;
}
const Image = styled.img<imageStateProps>`
    position: absolute;
    opacity: ${(props) => (props.show || props.background ? 1 : 0)};
    z-index: ${(props) => (props.show ? 2 : 1)};
    visibility: ${(props) =>
        props.show || props.background ? `visible` : `hidden`};
    ${(props) => props.show && `transition: opacity 1.5s ease-in;`}
`;

const SlideImage = [home, Edit, talk, takephoto, InstagramImg];
const IMAGE_LENGTH = SlideImage.length;
export const ShowingInstagram = () => {
    // 写个首页的轮播图
    const [index, setIndex] = useState(-1);

    useEffect(()=>{
        const TimerId = setInterval(() => {
            const updateIndex = index+1 === IMAGE_LENGTH ? 0 : index+1;
            setIndex(updateIndex);
        },5000)
        return () => {
            clearInterval(TimerId)
        }
    },[index])
    return (
        <SliderContainer>
            <div className="slider">
                {SlideImage.map((img, order) => {
                    const isBackground = order === index ? true : false;
                    const isShow =
                        order === (index + 1) % IMAGE_LENGTH ? true : false;
                    return (
                        <Image
                            key={order}
                            src={img}
                            background={isBackground}
                            show={isShow}
                        />
                    );
                })}
            </div>
        </SliderContainer>
    );
};
