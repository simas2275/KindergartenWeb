import axios from "axios";
import { useMutation } from "react-query";
const addData = async (data) => {
  return axios.post("/postKomentaras", data);
};
 const useAddKomentaras = () => useMutation(addData, {});

 export default useAddKomentaras;

