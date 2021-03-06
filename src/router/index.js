import Vue from "vue";
import VueRouter from "vue-router";
import classify from "./classify";
import beauty from "./beauty";
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
            meta:{
                flag:true
            },
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
            meta:{
                flag:true
            },
            component:_=>import("@pages/parcel")
        },
        {
            path:"/selects/:title/:id",
            name:"selects",
            props:true,
            component:_=>import("@pages/selects")
        },
        {
            path:"/crazyrush",
            name:"crazyRush",
            component:_=>import("@pages/crazyrush")
        },
        {
            path:"/mine",
            name:"mine",
            meta:{
                flag:true,
                requiredAuth:true
            },
            component:_=>import("@pages/mine")
        },
        beauty,
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

router.beforeEach((to, from, next) => {
   if(to.path!="/login"&& to.meta.requiredAuth){
    if(document.cookie.indexOf("token")==0){
        next();
    }else{
        next({name:"login",params:[{to:to.path}]})
    }
   }else{
       next();
   }
    
})
export default router;
