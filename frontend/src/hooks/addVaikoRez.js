import axios from "axios";
import { useMutation } from "react-query";
import { auth } from "../firebase";

const addVaikoData = async (data) => {
  const idToken = await auth.currentUser.getIdToken(true);
  return axios.post("/postVaikoRez", data, {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });
};

const useAddVaikoData = () => useMutation(addVaikoData, {});

export default useAddVaikoData;
