import http from "@utils/request";


export const classifyApi = () => http({
    method: "get",
    url: "/index.php?r=class/category&type=1",
    data: {
       
    }
})