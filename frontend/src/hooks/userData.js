import axios from 'axios'
import {useQuery} from "react-query"
import {auth} from "../firebase"

const userData = async () => {
    const idToken = await auth.currentUser.getIdToken(true)
    const {data} = await axios.get("/user", {
        headers: {
            Authorization: `Bearer ${idToken}`
        }
    })
    // console.log('fetchingUser')
    // console.log(idToken)
    return data
}

const useUsers = () => {
    return useQuery("User", userData, {
        refetchOnMount:false,
        retry: false,
        refetchOnWindowFocus: false,
        staleTime: 5000
    })
}


export default useUsers
