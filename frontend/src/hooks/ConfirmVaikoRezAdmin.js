import axios from "axios";
import { useMutation } from "react-query";
import { auth } from "../firebase";

const confirmVaikoRez = async (userId) => {
  const idToken = await auth.currentUser.getIdToken(true);
  console.log(userId)
  return axios.get(`/atnaujiname/${userId}`,  {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });
};

const useConfirmVaikoRez = () => useMutation(confirmVaikoRez, {});

export default useConfirmVaikoRez;
