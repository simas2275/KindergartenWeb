import axios from 'axios'
import {useQuery} from "react-query"
import {auth} from "../firebase"

const klausimoOffData = async () => {
    const idToken = await auth.currentUser.getIdToken(true)
    const {data} = await axios.get("/getKlausimusAdmin", {
        headers: {
            Authorization: `Bearer ${idToken}`
        }
    })
    // console.log(data)
    return data
    
}

const useGetOffKlausimas = () => {
    return useQuery("OffKlausimai", klausimoOffData, {
        refetchOnMount: true,
        retry: true,
        // refetchInterval: 1,
        refetchOnWindowFocus: true,
        refetchOnReconnect: true,
        staleTime: 2000
    })
    
}
export default useGetOffKlausimas
