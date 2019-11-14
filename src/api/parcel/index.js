import http from "@utils/request";

export const parcelList=(i=58)=>http({
    method:"get",
    url:"/index.php?r=nine/listajax&n_id="+i+"&page=1&cac_id=",
    data:{

    }
})
