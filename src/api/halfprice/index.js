import http from "@utils/request";

export const halfList=()=>http({
    method:"get",
    url:"/api/goods/price/half-of-daily-session",
    data:{

    }
})
export const halfProduct=(i='13')=>http({
    method:"get",
    url:"/api/goods/price/half-of-daily-session-not-current?currentSession="+i+"&nextDay=false",
    data:{

    }
})
