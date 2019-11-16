import http from "@utils/request";

export const selectList=(i=2)=>http({
    method:"get",
    url:"/index.php?r=nine/listajax&page=1&storey=1&n_id="+i+"&cac_id=",
    data:{

    }
})
