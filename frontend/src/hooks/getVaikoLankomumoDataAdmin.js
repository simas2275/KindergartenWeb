import axios from 'axios'
import { isValidElement } from 'react'
import {useQuery} from "react-query"
import {auth} from "../firebase"
import useGetVaikoDuomAdmin from "./getVaikoRezDuomAdmin"


// const vaikoData = async () => {
//     const idToken = await auth.currentUser.getIdToken(true)
//     const {data} = await axios.get("/getVaikoRezDuom", {
//         headers: {
//             Authorization: `Bearer ${idToken}`
//         }
//     })

    
//     return data


    
// }
const lankomumoDataAdmin = async () => {
    const idToken = await auth.currentUser.getIdToken(true)
    const {data} = await axios.get("/getVaikoLankomumoDuomAdmin", {
        headers: {
            Authorization: `Bearer ${idToken}`
        }
    })
    return data
    
}

const useGetVaikoLankomumoAdmin = () => {
    return useQuery("VaikoLank", lankomumoDataAdmin, {
        refetchOnMount: true,
        retry: true,
        // refetchInterval: 1,
        refetchOnWindowFocus: true,
        refetchOnReconnect: true,
        staleTime: 5000
    })
    
}
export default useGetVaikoLankomumoAdmin
