import axios from "axios";
import { useMutation } from "react-query";
import { auth } from "../../firebase";

const UpdatePenkt = async (userId) => {
  const idToken = await auth.currentUser.getIdToken(true);
//   console.log(userId)
  return axios.get(`/updateVaikoLankomuma5/${userId}`,  {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });
};

const useUpdatePenkt = () => useMutation(UpdatePenkt, {});

export default useUpdatePenkt;
