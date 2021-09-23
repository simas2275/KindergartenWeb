import axios from "axios";
import { useQuery } from "react-query";
import { auth } from "../firebase";

const fetchPosts = async () => {
  const idToken = await auth.currentUser.getIdToken(true);
  const { data } = await axios.get("/posts", {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });
  console.log("fetchingPosts");
  return data;
};

const usePosts = () => {
  return useQuery("posts", fetchPosts, {
    refetchOnMount: false,
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 5000,
  });
};

export default usePosts;
