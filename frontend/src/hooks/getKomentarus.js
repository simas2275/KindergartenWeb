import axios from 'axios'
import {useQuery} from "react-query"
import {auth} from "../firebase"

const komentaroData = async () => {
    const idToken = await auth.currentUser.getIdToken(true)
    const {data} = await axios.get("/getKlausimai", {
        headers: {
            Authorization: `Bearer ${idToken}`
        }
    })
    // console.log(data)
    return data
    
}

const useGetKomentaras = () => {
    return useQuery("Klausimai", komentaroData, {
        refetchOnMount: true,
        retry: true,
        // refetchInterval: 1,
        refetchOnWindowFocus: true,
        refetchOnReconnect: true,
        staleTime: 2000
    })
    
}
export default useGetKomentaras
