import axios from 'axios'
import {useMutation, useQuery} from "react-query"
import {auth} from "../firebase"




const UpdatePost = async () => {
    const {data} = await axios.post("/update", data)
    return data
  }

export default UpdatePost