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
        classify
    ]
})

export default router;
