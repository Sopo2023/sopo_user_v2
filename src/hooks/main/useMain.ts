import { showToast } from "@src/libs/toast/swal";
import { useState } from "react";
import { useGetSeniortojuniorList } from "src/queries/seniortojunior/seniortojunior.quey";
import { pageParms } from "src/repositories/SeniortojuniorRespository/SeniortojuniorRepository";


export const UseMain=()=>{
    const  pageParms={
        page:1,
        size:4
    }
const {data}=useGetSeniortojuniorList(pageParms);
return{
    data
}
}

