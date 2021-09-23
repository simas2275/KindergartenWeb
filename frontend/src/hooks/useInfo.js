import axios from "axios";
import { useQuery } from "react-query";

const fetchPosts = async () => {
  const { data } = await axios.get("/info");
  // console.log("fetchingPosts");
  return data;
};

const useInfoPosts = () => {
  return useQuery("info", fetchPosts, {
    refetchOnMount: false,
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 5000,
  });
};

export default useInfoPosts;
