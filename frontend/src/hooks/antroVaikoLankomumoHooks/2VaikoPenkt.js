import axios from "axios";
import { useMutation } from "react-query";
import { auth } from "../../firebase";

const UpdateAntroPenkt = async (userId) => {
  const idToken = await auth.currentUser.getIdToken(true);
//   console.log(userId)
  return axios.get(`/updateVaiko2Lankomuma5/${userId}`,  {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });
};

const useUpdateAntroPenkt = () => useMutation(UpdateAntroPenkt, {});

export default useUpdateAntroPenkt;
