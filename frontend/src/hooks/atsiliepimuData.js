import axios from 'axios'
import {useQuery} from "react-query"
import {auth} from "../firebase"

const atsiliepimuData = async () => {
    const idToken = await auth.currentUser.getIdToken(true)
    const {data} = await axios.get("/atsiliepimaiGet", {
        headers: {
            Authorization: `Bearer ${idToken}`
        }
    })
    // console.log('fetchingUser')
    // console.log(idToken)
    return data
}

const useAtsiliepimus = () => {
    return useQuery("Atsiliepimai", atsiliepimuData, {
        refetchOnMount:true,
        retry: false,
        refetchOnWindowFocus: true,
        staleTime: 5000,
    })
}

export default useAtsiliepimus
