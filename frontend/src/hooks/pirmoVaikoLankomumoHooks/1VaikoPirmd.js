import axios from "axios";
import { useMutation } from "react-query";
import { auth } from "../../firebase";

const UpdatePirmd = async (userId) => {
  const idToken = await auth.currentUser.getIdToken(true);
//   console.log(userId)
  return axios.get(`/updateVaikoLankomuma1/${userId}`,  {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });
};

const useUpdatePirmd = () => useMutation(UpdatePirmd, {});

export default useUpdatePirmd;
