import axios from 'axios'
import {useQuery} from "react-query"
import {auth} from "../firebase"

const vaikoData = async () => {
    const idToken = await auth.currentUser.getIdToken(true)
    const {data} = await axios.get("/getVaikoDuom", {
        headers: {
            Authorization: `Bearer ${idToken}`
        }
    })
    return data
    
}

const useGetVaikoDuom = () => {
    return useQuery("VaikoDuomenys", vaikoData, {
        refetchOnMount:true,
        refetchOnReconnect: true,
        retry: false,
        refetchOnWindowFocus: true,
        staleTime: 5000 
    })
}
export default useGetVaikoDuom
