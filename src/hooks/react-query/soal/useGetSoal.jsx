import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getSoal = () => {
  return axios.get("soal.json");
};

const useGetSoal = () => {
  const query = useQuery({
    queryKey: ["repoData"],
    queryFn: getSoal,
    select: (data) => data?.data,
  });

  return query;
};

export default useGetSoal;
