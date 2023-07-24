/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-07-23 20:56:47
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-07-24 21:38:45
 * @FilePath: /instagram/vite-project/src/app/store/Hooks.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
    