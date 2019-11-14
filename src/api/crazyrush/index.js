import http from "@utils/request";

export const crazyList=()=>http({
    method:"get",
    url:"/api/goods/rushing-ranking/cate-list/v1",
    data:{

    }
})
export const crazyProduct=(i=0)=>http({
    method:"get",
    url:"/api/goods/rushing-ranking/goods-list2/v2?type=1&cId="+i,
    data:{

    }
})