import axios from 'axios'
import {useQuery} from "react-query"
import {auth} from "../firebase"

const vaikoData = async () => {
    const idToken = await auth.currentUser.getIdToken(true)
    const {data} = await axios.get("/getVaikoRezDuom", {
        headers: {
            Authorization: `Bearer ${idToken}`
        }
    })
    return data
    
}

const useGetVaikoDuomAdmin = () => {
    return useQuery("VaikuDuomenys", vaikoData, {
        refetchOnMount:true,
        refetchOnReconnect: true,
        retry: false,
        refetchOnWindowFocus: true,
        staleTime: 5000 
    })
}
export default useGetVaikoDuomAdmin
