import http from "@utils/request";

export const homeList =()=>http({
    method:"get",
    url:"/api/category/get-category-list",
    data:{

    }
})

export const brandPic =()=>http({
    method:"get",
    url:"/api/category/product/model-detail-by-model-id-new?entityId=4&modelId=12734&proModelId=21&source=3&version=v1&tuserId=529283&isWechat=0",
    data:{

    }
})
export const brandImg =()=>http({
    method:"get",
    url:"/api/category/product/model-detail-by-model-id-new?entityId=4&modelId=12733&proModelId=19&source=3&version=v1&tuserId=529283&isWechat=0",
    data:{

    }
})

export const shopList =()=>http({
    method:"get",
    url:"/api/category/index/lingquan-live-new?pageId=1&pageSize=10&entityId=4&type=1&version=v1&tuserId=529283&isWechat=0",
    data:{

    }
})

export const titleList =()=>http({
    method:"get",
    url:"/api/category/product/model-detail-by-model-id-new?entityId=4&modelId=12844&proModelId=2&source=3&version=v1&tuserId=529283&isWechat=0",
    data:{

    }
})

export const swipePic =()=>http({
    method:"get",
    url:"/api/category/product/model-detail-by-model-id-new?entityId=4&modelId=-1&proModelId=1&source=3&version=v1&tuserId=529283&isWechat=0",
    data:{

    }
})