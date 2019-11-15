import http from "@utils/request";


export const searchApi = (kw) => http({
    method: "get",
    url: "/index.php?r=index/kwarr&token=7dd11b2265ef658c16f8b674630d0354",
    data: {
        kw:kw
    }
})