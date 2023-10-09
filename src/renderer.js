/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2023-08-07 21:07:34
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2023-10-09 15:53:17
 * @Description: 
 * 
 * Copyright (c) 2023 by Night-stars-1, All Rights Reserved. 
 */
const images_obj = qsticker.getimage
let images = await images_obj()
output(images)
const qtab_sticker = document.createElement("div");
qtab_sticker.classList.add("tabs-container-item")
qtab_sticker.id = "custom_sticker"
qtab_sticker.innerHTML = `
<i class="q-icon" title="自定义表情" is-bold="true" data-v-f2dd5ac7="" data-v-c829fb74="" style="--5fa79aa1: var(--icon_primary); --6ac3901c: 24px;"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="path-for-mask-18740" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.67368 4.75872C5.90524 2.41376 9.52333 2.41376 11.7549 4.75872L12 5.01628L12.2451 4.75872C14.4767 2.41376 18.0948 2.41376 20.3263 4.75872C22.5579 7.10368 22.5579 10.9056 20.3263 13.2506L12.7244 21.2388C12.3303 21.653 11.6697 21.653 11.2756 21.2388L3.67368 13.2506C1.44211 10.9056 1.44211 7.10368 3.67368 4.75872Z"></path></mask><path d="M11.7549 4.75872L12.8415 3.72466L12.8415 3.72466L11.7549 4.75872ZM3.67368 4.75872L4.76028 5.79278L4.76028 5.79278L3.67368 4.75872ZM12 5.01628L10.9134 6.05034L12 7.19217L13.0866 6.05034L12 5.01628ZM12.2451 4.75872L13.3317 5.79278L13.3317 5.79278L12.2451 4.75872ZM20.3263 4.75872L21.4129 3.72466L21.4129 3.72466L20.3263 4.75872ZM20.3263 13.2506L21.4129 14.2846L21.4129 14.2846L20.3263 13.2506ZM3.67368 13.2506L4.76028 12.2165L4.76028 12.2165L3.67368 13.2506ZM11.2756 21.2388L10.189 22.2728L11.2756 21.2388ZM12.8415 3.72466C10.0187 0.758447 5.40984 0.758447 2.58707 3.72466L4.76028 5.79278C6.40064 4.06907 9.02793 4.06907 10.6683 5.79278L12.8415 3.72466ZM13.0866 3.98222L12.8415 3.72466L10.6683 5.79278L10.9134 6.05034L13.0866 3.98222ZM11.1585 3.72466L10.9134 3.98222L13.0866 6.05034L13.3317 5.79278L11.1585 3.72466ZM21.4129 3.72466C18.5902 0.758447 13.9813 0.758447 11.1585 3.72466L13.3317 5.79278C14.9721 4.06907 17.5994 4.06907 19.2397 5.79278L21.4129 3.72466ZM21.4129 14.2846C24.1957 11.3605 24.1957 6.64882 21.4129 3.72466L19.2397 5.79278C20.9201 7.55855 20.9201 10.4508 19.2397 12.2165L21.4129 14.2846ZM2.58707 3.72466C-0.195689 6.64882 -0.195689 11.3605 2.58707 14.2846L4.76028 12.2165C3.07991 10.4508 3.07991 7.55855 4.76028 5.79278L2.58707 3.72466ZM13.811 22.2728L21.4129 14.2846L19.2397 12.2165L11.6378 20.2047L13.811 22.2728ZM2.58707 14.2846L10.189 22.2728L12.3622 20.2047L4.76028 12.2165L2.58707 14.2846ZM11.6378 20.2047C11.8349 19.9976 12.1651 19.9976 12.3622 20.2047L10.189 22.2728C11.1743 23.3083 12.8257 23.3083 13.811 22.2728L11.6378 20.2047Z" fill="currentColor" mask="url(#path-for-mask-18740)"></path></svg></i>
`

const qpages_sticker = document.createElement("div");
qpages_sticker.id = "custom_sticker_1"
qpages_sticker.classList.add("sticker-panel__pages");
qpages_sticker.innerHTML = `
<div class="q-scroll-view scroll-view--show-scrollbar sticker-list vue-component" data-v-ad72b3bc="">
</div>
`

const sticker_item = document.createElement("div");
//sticker_item.setAttribute("ondragstart", "return false")
sticker_item.setAttribute("data-v-ad72b3bc", "")
sticker_item.classList.add("sticker-list-item");
sticker_item.innerHTML = `
<div class="q-tooltips sticker-list-tooltips vue-component" data-v-ad72b3bc="">
    <div class="image sticker-list-item-img vue-component" data-src="" ondragstart="return false" data-v-0acd8bde="" data-v-ad72b3bc="" role="img" tabindex="-1" style="width: 58px; height: 58px;">
        <img class="image-content image-content--contain" src="appimg://H:/QQ/1042633805/nt_qq/nt_data/Emoji/personal_emoji/Ori/2AE4CC679F383B853289AAD2E87F3026.jpg" data-path="appimg://H:/QQ/1042633805/nt_qq/nt_data/Emoji/personal_emoji/Ori/2AE4CC679F383B853289AAD2E87F3026.jpg" loading="eager" data-v-0acd8bde="">
    </div>
    <div class="q-tooltips__content q-tooltips__right  q-tooltips__no_content" style="right: -5px; top: 50%; transform: translateY(-50%);">
    </div>
</div>
`

function output(...args) {
    console.log("\x1b[32m[自定义表情-渲染]\x1b[0m", ...args);
}

async function onLoad() {
    const script = document.createElement("script");
    script.id = "sweetalert2"
    script.defer = true;
    script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@10";
    document.head.appendChild(script);
    const Interval = setInterval(() => {
        if (location.href.indexOf("#/main/message") == -1 && location.href.indexOf("#/chat/") == -1) return;
        if (!(LiteLoader?.plugins?.LLAPI?.manifest?.version >= "1.1.4")) {
            Swal.fire('LLAPI版本过低，请在插件商城安装最新版', '该提示并非QQ官方提示，请不要发给官方群', 'warning');
        }
        clearInterval(Interval);
    }, 1000);
    const plugin_path = LiteLoader.plugins.qsticker.path.plugin.replace("\\", "//");
    const data_path = LiteLoader.plugins.qsticker.path.data.replace("\\", "//");
    // CSS
    const css_file_path = `llqqnt://local-file/${plugin_path}/src/config/sticker.css`;
    const link_element = document.createElement("link");
    link_element.rel = "stylesheet";
    link_element.href = css_file_path;
    document.head.appendChild(link_element);
    // 自定义表情实现
    LLAPI.once("set_message", () => {
        output("set_message")
        const qsticker = document.querySelector('.icon-item[aria-label="表情"]');
        async function sticker_click(event) {
            const stickers = document.querySelector(".sticker-panel__pages:not([id='custom_sticker_1']")
            const click_tab = event.target.closest(".tabs-container-item")
            if (click_tab.id === 'custom_sticker') {
                // 点击自定义表情按钮
                const q_icon = document.querySelector(".tabs-container-item-active .q-icon")
                q_icon.setAttribute("style", q_icon.getAttribute("style").replace("--on_brand_secondary", "--icon_primary"))
                document.querySelector(".tabs-container-item-active").classList.remove("tabs-container-item-active") // 删除其他标签活动状态
                qtab_sticker.classList.add("tabs-container-item-active")
                //stickers.setAttribute("style", "display: none;")
                stickers.style.display = "none"
                if (!document.getElementById("custom_sticker_1")) {
                    // 自定义表情页存在
                    output("插入表情")
                    qtab_sticker.addEventListener("click", sticker_click)
                    //qpages_sticker.style.height = stickers.parentElement.style.height
                    qpages_sticker.style.height = "286px"
                    stickers.parentElement.insertBefore(qpages_sticker, stickers);
                    const stickers_list = qpages_sticker.querySelector(".q-scroll-view")
                    for (const image of images) {
                        const sticker_item_cloned = sticker_item.cloneNode(true);
                        sticker_item_cloned.title = image.includes('http')? "网络表情":"自定义表情"
                        sticker_item_cloned.querySelector("img").src = image.includes('http')? image:`appimg://${data_path}/images/${image}`
                        sticker_item_cloned.addEventListener('click', event => {
                            // 检查事件是否来自按钮
                            if (event.target.tagName === 'IMG') {
                                const message = {
                                    type: "pic",
                                    src: image.includes('http')? image:`${data_path}/images/${image}`
                                }
                                document.querySelector(".sticker-panel").style.display = "none"
                                LLAPI.add_editor(message)
                            }
                        });
                        stickers_list.appendChild(sticker_item_cloned)
                    }
                } else {
                    // 自定义表情页不存在/被隐藏
                    document.getElementById("custom_sticker_1").style.display = "block"
                }
            } else {
                // 点击其他按钮
                click_tab.classList.add("tabs-container-item-active")
                qtab_sticker.classList.remove("tabs-container-item-active")
                stickers.style.display = "block"
                document.getElementById("custom_sticker_1").style.display = "none"
            }
        }
        // 插入自定义表情标签
        qsticker.addEventListener("click", () => {
            if (!document.getElementById("custom_sticker")) {
                const tabs_qsticker = document.querySelector(".tabs-container");
                tabs_qsticker.addEventListener("click", sticker_click)
                //qtab_sticker.addEventListener("click", sticker_click)
                tabs_qsticker.insertBefore(qtab_sticker, tabs_qsticker.firstChild);
            }
        })
    })
}


export {
    onLoad
}