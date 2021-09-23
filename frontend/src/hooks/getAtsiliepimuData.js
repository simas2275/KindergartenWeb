import axios from 'axios'
import {useQuery} from "react-query"

const atsiliepimuData = async () => {
    const {data} = await axios.get("/klausimai/desc")
    return data
}

const useGetAtsiliepimuData = () => {
    return useQuery("AtsiliepimuDuomenys", atsiliepimuData, {
        refetchOnMount: true,
        retry: true,
        // refetchInterval: 1,
        refetchOnWindowFocus: true,
        refetchOnReconnect: true,
        staleTime: 2000
    })
}
export default useGetAtsiliepimuData
