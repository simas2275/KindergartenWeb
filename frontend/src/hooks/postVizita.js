import axios from "axios";
import { auth } from "../firebase";
import { useMutation } from "react-query";
const addVizita = async (data) => {
  //   console.log(idToken());
  return axios.post("/postVizitoInfo", data);
};
 const usePostVizitas = () => useMutation(addVizita, {});

 export default usePostVizitas;