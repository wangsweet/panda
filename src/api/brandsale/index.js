import http from "@utils/request";

export const brandList =()=>http({
    method:"get",
    url:"/api/goods/category-brand-list",
    data:{

    }
})

export const brandProductList =(i=3)=>http({
    method:"get",
    url:"/api/tb-service/brand-list-by-category-id?typeId="+i,
    data:{

    }
})