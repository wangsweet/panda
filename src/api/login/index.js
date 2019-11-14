import http from "@utils/request";

export const login =(username,password)=>http({
    method:"post",
    url:"/users/login",
    data:{
        username,
        password
    }
})