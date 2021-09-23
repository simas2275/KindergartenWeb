import axios from "axios";
import { auth } from "../firebase";
import { useMutation } from "react-query";
const UpdateInfoData = async (data, documentId) => {
  const idToken = await auth.currentUser.getIdToken(true);
  //   console.log(idToken());
  console.log(data)
  return axios.put(`/updateInfoAdmin/${documentId}`, data, {
    headers: {
        Authorization: `Bearer ${idToken}`,
      },
  });
};
 const useUpdateInfo = () => useMutation(UpdateInfoData, {});

 export default useUpdateInfo;