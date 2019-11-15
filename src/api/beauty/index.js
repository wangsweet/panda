import http from "@utils/request";


export const beautyApi= () => http({
    method: "get",
    url: "/index.php?r=class/index&type=2",
    data: {
    
    }
})
export const beautyorderApi= (cid) => http({
    method: "get",
    url: "/index.php?r=index/ajaxcat&px=t&page=1&cac_id=",
    data: {
       
        cid:cid
    }
})
export const beautylistApi= (cid) => http({
    method: "get",
    url: "/index.php?r=class%2Fajaxsub&page=1&px=t&cac_id=",
    data: {
       
        cid:cid
    }
})