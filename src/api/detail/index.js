import http from "@utils/request";


export const detailApi = (cid) => http({
    method: "get",
    url: "/index.php?r=class%2Fajaxsub&page=1&px=t&cac_id=",
    data: {
       cid:cid
    }
})
export const detailsApi = (cid) => http({
    method: "get",
    url: "/index.php?r=index/ajaxcat&px=t&page=1&cac_id=",
    data: {
       cid:cid
    }
})
export const detailimgApi = (goodsId) => http({
    method: "get",
    url: "/api/goods/get-goods-detail-img",
    data: {
        goodsId:goodsId
    }
})
export const detailshopApi = (goodsId) => http({
    method: "get",
    url: "/api/goods/get-goods-shop-info",
    data: {
        goodsId:goodsId
    }
})
export const detailrcdApi = (id) => http({
    method: "get",
    url: "/api/goods/get-recommend-goods",
    data: {
        id:id,
    }
})
export const detailsimApi = (id,categoryId) => http({
    method: "get",
    url: "/api/goods/get-similar-goods",
    data: {
        id:id,
        categoryId:categoryId
    }
})

export const detailssApi= (cid) => http({
    method: "get",
    url: "/index.php?r=class%2Fcyajaxsub&page=1&px=t&cac_id=",
    data: {
        cid:cid
    }
})