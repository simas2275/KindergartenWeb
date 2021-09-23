import axios from "axios";
import { useMutation } from "react-query";
import { auth } from "../../firebase";

const UpdateTrecioTrec = async (userId) => {
  const idToken = await auth.currentUser.getIdToken(true);
//   console.log(userId)
  return axios.get(`/updateVaiko2Lankomuma3/${userId}`,  {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });
};

const useUpdateTrecioTrec = () => useMutation(UpdateTrecioTrec, {});

export default useUpdateTrecioTrec;
