import loadingV from "./index.vue";
import Vue from "vue"
class Loading {
    constructor() {
        let LoadingFn = Vue.extend(loadingV);
        this.loadingVm = new LoadingFn({
            el: document.createElement("div")
        })
    }
    loadingMount() {
        document.body.appendChild(this.loadingVm.$mount().$el)
    }
    loadingDestory() {
        if (document.body.children.length==5) {
            document.body.removeChild(this.loadingVm.$mount().$el)
        }
    }
}
export default new Loading();