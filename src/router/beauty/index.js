export default{
    path:"/beauty",
    component:_=>import("@pages/beauty"),
    name:"beauty",
    meta:{
        flag:true
    },
    children:[
        {
        path:"/beauty",
        redirect: "/beauty/beautyorder"
        },
        {
            path:"beautyorder",
            component:_=>import("@components/beautyorder"),
            name:"beautyorder"
        }
    ]
}