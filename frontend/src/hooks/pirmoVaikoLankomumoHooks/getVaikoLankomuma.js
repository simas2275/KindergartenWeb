import axios from 'axios'
import {useQuery} from "react-query"
import {auth} from "../../firebase"

const lankomumoData = async () => {
    const idToken = await auth.currentUser.getIdToken(true)
    const {data} = await axios.get("/getVaikoLankomumoDuom", {
        headers: {
            Authorization: `Bearer ${idToken}`
        }
    })
    // console.log(data)
    return data
    
}

const useGetVaikoLankomuma = () => {
    return useQuery("Lankomumas", lankomumoData, {
        refetchOnMount: true,
        retry: true,
        // refetchInterval: 1,
        refetchOnWindowFocus: true,
        refetchOnReconnect: true,
        staleTime: 2000
    })
    
}
export default useGetVaikoLankomuma
