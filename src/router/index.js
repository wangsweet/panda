import Vue from "vue";
import VueRouter from "vue-router";
import classify from "./classify";
Vue.use(VueRouter);

const router = new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/index"
        },
        {
            path: "/index",
            name: "homePage",
            component: _ => import("@pages/homepage")
        },

        {
            path:"/brandsale",
            name:"brandSale",
            component:_=>import("@pages/brandsale")
        },
        {
            path:"/halfprice",
            name:"halfPrice",
            component:_=>import("@pages/halfprice")
        },
        {
            path:"/parcel",
            name:"parcel",
            component:_=>import("@pages/parcel")
        },
        {
            path:"/select",
            name:"select",
            component:_=>import("@pages/select")
        },
        {
            path:"/crazyrush",
            name:"crazyRush",
            component:_=>import("@pages/crazyrush")
        },
        {
            path:"/mine",
            name:"mine",
            component:_=>import("@pages/mine")
        },
        {
            path:"/beauty",
            name:"beauty",
            component:_=>import("@pages/beauty")
        },
        {
            path:"/beautylist",
            name:"beautylist",
            component:_=>import("@pages/beautylist")
        },
        {
            path:"/branddetail",
            name:"branddetail",
            component:_=>import("@pages/branddetail")
        },
        {
            path:"/detail",
            name:"detail",
            component:_=>import("@pages/detail")
        },
        {
            path:"/message",
            name:"message",
            component:_=>import("@pages/message")
        },
        {
            path:"/search",
            name:"search",
            component:_=>import("@pages/search")
        },
        {
            path:"/login",
            name:"login",
            component:_=>import("@common/login")
        },
        {
            path:"/registe",
            name:"registe",
            component:_=>import("@common/registe")
        },
        classify
    ]
})

export default router;
