/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2023-08-12 15:41:47
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2023-10-09 16:06:47
 * @Description: 
 * 
 * Copyright (c) 2023 by Night-stars-1, All Rights Reserved. 
 */
// 腾讯云TMT
const { ipcMain } = require("electron");
const fs = require("fs");
const path = require("path");

/**
 * 获取远程表情
 * @returns 
 */
function getRemote(path){
    const remotePath = `${path}/remotes.txt`;
    if (!fs.existsSync(remotePath)) return [];
    const stickerUrls = fs.readFileSync(remotePath).toString("utf8").split("\r\n");
    return stickerUrls[0] == ''? []:stickerUrls;
}

function onLoad(plugin, liteloader) {
    const pluginPath = plugin.path.data;
    const folderPath = path.join(pluginPath, "images");
    const remotesPath = path.join(pluginPath, "remotes.txt");
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }
    if (!fs.existsSync(remotesPath)) {
        fs.writeFileSync(remotesPath, "");
    }
    // 获取图片表情
    ipcMain.handle(
        "LiteLoader.qsticker.getimage",
        (event) => {
            try {
                const data = fs.readdirSync(folderPath, "utf-8");
                const remote_data = getRemote(folderPath)
                return data.concat(remote_data);
            } catch (error) {
                output(error);
                return [];
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