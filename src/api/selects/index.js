import http from "@utils/request";

export const selectList=()=>http({
    method:"get",
    url:"/index.php?r=nine/listajax&page=1&storey=1&n_id=2&cac_id=",
    data:{

    }
})
