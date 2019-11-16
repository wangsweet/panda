import messageBoxView from "./index.vue";
import Vue from "vue";
export default (() => {
    let defaultVal = {
        title: "信息",
        content: "内容",
        ok: function () {}
    }
    let messageBoxFn = Vue.extend(messageBoxView);
    return (options) => {
        for (var key in options) {
            defaultVal[key] = options[key];
        }
        let messageBoxVm = new messageBoxFn({
            el: document.createElement("div"),
            data: {
                title: defaultVal.title,
                content: defaultVal.content
            },
            methods: {
                handleOk: function () {
                    document.body.removeChild(messageBoxVm.$mount().$el)
                    defaultVal.ok&&defaultVal.ok()
                },
                handleClose() {
                    document.body.removeChild(messageBoxVm.$mount().$el)
                }
            }
        })
        document.body.appendChild(messageBoxVm.$mount().$el)
    }
})()