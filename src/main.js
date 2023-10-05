/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2023-08-12 15:41:47
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2023-10-05 18:29:16
 * @Description: 
 * 
 * Copyright (c) 2023 by Night-stars-1, All Rights Reserved. 
 */
// 腾讯云TMT
const { ipcMain } = require("electron");
const fs = require("fs");
const path = require("path");

function onLoad(plugin, liteloader) {
    const pluginPath = plugin.path.plugin;
    const folderPath = `${pluginPath}/src/images`;
    // 获取设置
    ipcMain.handle(
        "LiteLoader.qsticker.getimage",
        (event) => {
            try {
                const data = fs.readdirSync(folderPath, "utf-8");
                return data;
            } catch (error) {
                output(error);
                return {};
            }
        }
    );

}

function output(...args) {
    console.log("\x1b[32m[自定义表情]\x1b[0m", ...args);
}

module.exports = {
    onLoad
}