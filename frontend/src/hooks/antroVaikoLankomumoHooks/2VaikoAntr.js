import axios from "axios";
import { useMutation } from "react-query";
import { auth } from "../../firebase";

const UpdateAntroAntr = async (userId) => {
  const idToken = await auth.currentUser.getIdToken(true);
//   console.log(userId)
  return axios.get(`/updateVaiko2Lankomuma2/${userId}`,  {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });
};

const useUpdateAntroAntr = () => useMutation(UpdateAntroAntr, {});

export default useUpdateAntroAntr;
