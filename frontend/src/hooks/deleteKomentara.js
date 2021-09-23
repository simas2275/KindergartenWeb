import axios from "axios";
import { useMutation } from "react-query";
import { auth } from "../firebase";

const deleteKomentara = async (documentId) => {
  const idToken = await auth.currentUser.getIdToken(true);
  console.log(documentId)
  return axios.delete(`/deleteKomentara/${documentId}`,  {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });
};

const useDeleteKomentara = () => useMutation(deleteKomentara, {});

export default useDeleteKomentara;