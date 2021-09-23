import axios from "axios";
import { useMutation } from "react-query";
import { auth } from "../../firebase";

const UpdateAntr = async (userId) => {
  const idToken = await auth.currentUser.getIdToken(true);
//   console.log(userId)
  return axios.get(`/updateVaikoLankomuma2/${userId}`,  {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });
};

const useUpdateAntr = () => useMutation(UpdateAntr, {});

export default useUpdateAntr;
