// import { useEffect, useState } from "react";
import fetchUserList from "/API/userListAPI.jsx";
import useQuery from "./useQuery";

function useUserList() {
  console.log(fetchUserList);
  const usequery = useQuery(fetchUserList);

  return usequery;
}

export default useUserList;
