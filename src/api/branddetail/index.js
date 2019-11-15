import http from "@utils/request";


export const branddetailApi = (brandId) => http({
    method: "get",
    url: "/api/tb-service/brand/detail-info",
    data: {
        
        brandId:brandId
    }
})
export const branddetailsApi = (brand_id) => http({
    method: "get",
    url: "/index.php?r=brand/branddetaillist",
    data: {
        token: "7dd11b2265ef658c16f8b674630d0354",
        brand_id:brand_id,
        page: 1,
        tuserId: 529283,
        entityId: 4
    }
})