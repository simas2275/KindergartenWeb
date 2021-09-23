import axios from "axios";
import { useMutation } from "react-query";
import { auth } from "../../firebase";

const UpdateKetv = async (userId) => {
  const idToken = await auth.currentUser.getIdToken(true);
//   console.log(userId)
  return axios.get(`/updateVaikoLankomuma4/${userId}`,  {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });
};

const useUpdateKetv = () => useMutation(UpdateKetv, {});

export default useUpdateKetv;
