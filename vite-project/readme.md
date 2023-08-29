<!--
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-08-24 22:40:59
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-08-24 22:44:22
 * @FilePath: /instagram/vite-project/readme.md
 * @Description: 一些简单的个人答疑
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
tips:
1.什么时候使用dispatch触发action
直接操作state,没有异步动作（如获取接口）时可以直接使用dispatch
2.什么使用thunk里面的函数
有异步操作如接口值的返回，然后进一步触发dispatch变更slice里面的action，更改全局的值
3.类比vuex为
问题一为何时触发mutation问题二为何时触发action