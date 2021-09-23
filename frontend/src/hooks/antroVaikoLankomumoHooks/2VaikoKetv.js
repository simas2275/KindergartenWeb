import axios from "axios";
import { useMutation } from "react-query";
import { auth } from "../../firebase";

const UpdateAntroKetv = async (userId) => {
  const idToken = await auth.currentUser.getIdToken(true);
//   console.log(userId)
  return axios.get(`/updateVaiko2Lankomuma4/${userId}`,  {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });
};

const useUpdateAntroKetv = () => useMutation(UpdateAntroKetv, {});

export default useUpdateAntroKetv;
