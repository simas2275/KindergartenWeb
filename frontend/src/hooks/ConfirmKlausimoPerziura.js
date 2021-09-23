import axios from "axios";
import { useMutation } from "react-query";
import { auth } from "../firebase";

const confirmKlausima = async (anonymousEmail) => {
  const idToken = await auth.currentUser.getIdToken(true);
//   console.log(anonymousEmail)
  return axios.get(`/updateKlausima/${anonymousEmail}`,  {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });
};

const useConfirmKlausima = () => useMutation(confirmKlausima, {});

export default useConfirmKlausima;
