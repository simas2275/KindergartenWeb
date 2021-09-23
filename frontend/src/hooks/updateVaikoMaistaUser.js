import axios from "axios";
import { auth } from "../firebase";
import { useMutation } from "react-query";
const addVaikoMaistoData = async (data) => {
  const idToken = await auth.currentUser.getIdToken(true);
  //   console.log(idToken());
  return axios.post("/postVaikoMaistas", data, {
    headers: {
        Authorization: `Bearer ${idToken}`,
      },
  });
};
 const useAddVaikoMaistoData = () => useMutation(addVaikoMaistoData, {});

 export default useAddVaikoMaistoData;