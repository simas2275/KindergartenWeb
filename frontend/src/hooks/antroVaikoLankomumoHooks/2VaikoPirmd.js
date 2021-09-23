import axios from "axios";
import { useMutation } from "react-query";
import { auth } from "../../firebase";

const UpdateAntroPirmd = async (userId) => {
  const idToken = await auth.currentUser.getIdToken(true);
//   console.log(userId)
  return axios.get(`/updateVaiko2Lankomuma1/${userId}`,  {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });
};

const useUpdateAntroPirmd = () => useMutation(UpdateAntroPirmd, {});

export default useUpdateAntroPirmd;