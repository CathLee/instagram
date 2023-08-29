/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-07-14 22:00:27
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-08-26 13:34:27
 * @FilePath: /instagram/vite-project/vite.config.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: /\.(png|jpe?g|gif|svg|ico|webp)$/,
  server: {
    host:true,
    proxy: {
      '/api': {
        target: 'http://192.168.0.103:8080', // 后端服务器地址
        changeOrigin: true,   
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
