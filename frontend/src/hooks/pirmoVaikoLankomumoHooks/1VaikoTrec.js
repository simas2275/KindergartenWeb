import axios from "axios";
import { useMutation } from "react-query";
import { auth } from "../../firebase";

const UpdateTrec = async (userId) => {
  const idToken = await auth.currentUser.getIdToken(true);
//   console.log(userId)
  return axios.get(`/updateVaikoLankomuma3/${userId}`,  {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });
};

const useUpdateTrec = () => useMutation(UpdateTrec, {});

export default useUpdateTrec;
