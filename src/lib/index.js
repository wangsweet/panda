import loading from "./loading";
import bscroll from "./bscroll";
const UIcomponents = [
    bscroll
]


 const install = (Vue)=>{
    //全局注册
    UIcomponents.forEach(item=>{
        Vue.component(item.name,item);
    })
}


export default {loading,install}