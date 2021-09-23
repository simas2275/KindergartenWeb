import axios from 'axios'
import {useQuery} from "react-query"
import {auth} from "../firebase"

const VizitoData = async () => {
    const idToken = await auth.currentUser.getIdToken(true)
    const {data} = await axios.get("/getVizitoInfo", {
        headers: {
            Authorization: `Bearer ${idToken}`
        }
    })
    return data
    
}

const useGetVizitoDuomAdmin = () => {
    return useQuery("VizitoDuomenys", VizitoData, {
        refetchOnMount:true,
        refetchOnReconnect: true,
        retry: false,
        refetchOnWindowFocus: true,
        staleTime: 5000 
    })
}
export default useGetVizitoDuomAdmin
