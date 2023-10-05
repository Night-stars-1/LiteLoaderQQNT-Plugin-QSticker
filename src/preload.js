/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2023-08-05 13:44:33
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2023-08-26 18:36:33
 * @Description: 
 * 
 * Copyright (c) 2023 by Night-stars-1, All Rights Reserved. 
 */
// Electron 主进程 与 渲染进程 交互的桥梁
const { contextBridge, ipcRenderer } = require("electron");

// 在window对象下导出只读对象
contextBridge.exposeInMainWorld("qsticker", {
    getimage: () => ipcRenderer.invoke(
        "LiteLoader.qsticker.getimage"
    )
});
