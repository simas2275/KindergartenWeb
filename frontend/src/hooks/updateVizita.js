import axios from "axios";
import { useMutation } from "react-query";
import { auth } from "../firebase";

const updateVizita = async (documentId) => {
  const idToken = await auth.currentUser.getIdToken(true);
  console.log(documentId)
  return axios.delete(`/updateVizitoBusena/${documentId}`,  {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });
};

const useUpdateVizita = () => useMutation(updateVizita, {});

export default useUpdateVizita;
