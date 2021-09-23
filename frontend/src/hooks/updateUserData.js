import axios from "axios";
import { auth } from "../firebase";
import { useMutation } from "react-query";
const updateUserNameData = async (data) => {
  const idToken = await auth.currentUser.getIdToken(true);
  //   console.log(idToken());
  console.log(data)
  return axios.put("/updateUserInfo", data, {
    headers: {
        Authorization: `Bearer ${idToken}`,
      },
  });
};
 const useUpdateUserName = () => useMutation(updateUserNameData, {});

 export default useUpdateUserName;