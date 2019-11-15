export default{
    path:"/classify",
    component:_=>import("@pages/classify"),
    name:"classify",
    meta:{
        flag:true
    },
    children:[
        {
        path:"/classify",
        redirect: "/classify/classifyrcd"
        },
        
        {
            path:"classifyrcd",
            component:_=>import("@components/classifyrcd"),
            name:"classifyrcd",
            meta:{
                flag:true
            },
        }
    ]
}