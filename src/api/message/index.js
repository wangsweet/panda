import http from "@utils/request";


export const messageApi = () => http({
    method: "get",
    url: "/index.php?r=index/getallmessage",
    data: {
        token: "7dd11b2265ef658c16f8b674630d0354",
        pageId: 1,
        pageSize: 20,
    }
})