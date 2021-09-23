import axios from "axios";
import { auth } from "../firebase";
import { useMutation } from "react-query";
const addAtsiliepimasUser = async (data) => {
  const idToken = await auth.currentUser.getIdToken(true);
  //   console.log(idToken());
  return axios.post("/atsliepimoPost", data, {
    headers: {
        Authorization: `Bearer ${idToken}`,
      },
  });
};
 const usePostAtsiliepimas = () => useMutation(addAtsiliepimasUser, {});

 export default usePostAtsiliepimas;