/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-07-16 11:08:58
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-07-16 11:15:31
 * @FilePath: /instagram/vite-project/src/customAxios.ts
 * @Description: 创建全局拦截器
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */


import axios, { AxiosInstance } from 'axios';

export const customAxios:AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true,
});