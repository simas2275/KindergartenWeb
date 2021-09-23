import axios from "axios";
import { auth } from "../firebase";
import { useMutation } from "react-query";
const addData = async (data) => {
  const idToken = await auth.currentUser.getIdToken(true);
  //   console.log(idToken());
  return axios.post("/post", data, {
    headers: {
        Authorization: `Bearer ${idToken}`,
      },
  });
};
 const useAddData = () => useMutation(addData, {});

 export default useAddData;