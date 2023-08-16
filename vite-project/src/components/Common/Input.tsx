/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-07-18 20:10:19
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-08-14 22:02:01
 * @FilePath: /instagram/vite-project/src/components/Common/Input.tsx
 * @Description: 触发input操作的真实对象
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { AuthType, CommonType } from "../../@type";
import { MouseEvent, useState } from "react";
import styled, { css } from "styled-components";
import ImageSprite from "./ImageSprite";
import Logo from "../../assets/react.svg";
import { ChangeEvent } from "react";
interface InputProps {
    isSmallInnerText: boolean;
    isFocus: boolean | undefined;
}
const InputContainer = styled.div<InputProps>`
    margin: 0 40px 6px;

    .inputContent {
        display: flex;
        font-size: 14px;
        position: relative;
        width: 100%;
        border: 1px solid
            ${(props) =>
                props.isFocus ? "#a8a8a8" : props.theme.color.bd_gray};
        background-color: ${(props) => props.theme.color.bg_gray};
        border-radius: 3px;
        align-items: center;
    }

    .placeholder {
        height: 36px;
        flex: 1 0 0;
        padding: 0;
        margin: 0;
        min-width: 0;
        position: relative;
        cursor: text;

        .innerText {
            color: #8e8e8e;
            font-size: 12px;
            height: 36px;
            left: 8px;
            line-height: 36px;
            position: absolute;
            right: 0;
            transform-origin: left;
            user-select: none;
            transition: transform ease-out 0.1s;
            ${(props) =>
                props.isSmallInnerText &&
                css`
                    transform: scale(0.83333) translateY(-10px);
                `}
        }

        .writingForm {
            border: 0;
            flex: 1 0 auto;
            margin: 0;
            outline: 0;
            padding: ${(props) =>
                props.isSmallInnerText ? "14px 0 2px 8px" : "9px 0 7px 8px"};
            overflow: hidden;
            text-overflow: ellipsis;
            width: 100%;
            height: 100%;
            font-size: 12px;
        }
    }

    .inputState {
        height: 100%;
        padding-right: 8px;
        display: flex;

        .stateStyle {
            margin-left: 8px;
        }
        .showPassword {
            user-select: none;
        }
    }
`;

const Input = (props: AuthType.InputProps) => {
    const { innerText, type, inputName } = props;
    const [isSmallInnerText, setInnerTextSize] = useState(false);
    const [inputType, setInputType] = useState(type);
    const [isShowPassword, setShowPassword] = useState(false);
    const [passwordMessage, setPasswordMessage] = useState<"显示密码" | "隐藏">(
        "显示密码",
    );

    const textChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const hasValue = e.target.value.trim().length > 0 ? true : false;
        setInnerTextSize(hasValue);
        setShowPassword(inputName === "password" && hasValue);
    };

    const passwordVisibleHandler = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setInputType(inputType === "password" ? "text" : "password");
        setPasswordMessage(
            passwordMessage === "显示密码" ? "隐藏" : "显示密码",
        );
    };

    // 校验不通过时的image提示
    const InvalidFlag: CommonType.ImageProps = {
        width: 22,
        height: 22,
        position: `-249px -333px`,
        url: Logo,
    };

    const ValidFlag: CommonType.ImageProps = {
        width: 22,
        height: 22,
        position: `-225px -333px`,
        url: Logo,
    };

    return (
        <InputContainer
            isSmallInnerText={isSmallInnerText}
            isFocus={props.isFocus}
        >
            <div className="inputContent">
                <label className="placeholder">
                    <span className="innerText">{innerText}</span>
                    <input
                        type={inputType}
                        name={inputName}
                        className="writingForm"
                        {...props.inputProps}
                        onChange={(e) => {
                            textChangeHandler(e);
                            props.inputProps.onChange(e);
                        }}
                    />
                </label>
                <div className="inputState">
                    {props.hasValidator &&
                        (!props.inputProps.onBlur ? null : props.isValid ===
                          null ? null : !props.isValid && !props.isFocus ? (
                            <ImageSprite
                                {...InvalidFlag}
                                className="stateStyle"
                            />
                        ) : !props.isValid && props.isFocus ? null : (
                            <ImageSprite
                                {...ValidFlag}
                                className="stateStyle"
                            />
                        ))}
                    
                    {isShowPassword && (
                        <button
                            className="showPassword stateStyle"
                            type="button"
                            onClick={passwordVisibleHandler}
                        >
                            {passwordMessage}
                        </button>
                    )}
                </div>
            </div>
        </InputContainer>
    );
};

Input.propTypes = {};

export default Input;
