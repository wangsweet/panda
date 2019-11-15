import http from "@utils/request";

export const registe =(username,password)=>http({
    method:"post",
    url:"/users/register",
    data:{
        username,
        password
    }
})