//import { useInfiniteQuery } from "@tanstack/react-query";

//import axios from "axios";

//async function getData({ pageParam = 0 }) {
//  const response = await axios.get(
//    `https://qa.corider.in/assignment/chat?page=${pageParam}`
//  );

//  const dataFromServer = response;

//  const data = {
//    results: dataFromServer.data,
//    next:
//     pageParam > 0 ? pageParam + 1 : undefined,
//  };
//  return data;
//}

//export const useUsersQuery = () => {
//  const query = useInfiniteQuery("messages", getData, {
//    getNextPageParam: (lastPage) => lastPage.next,
//  });

//  return query;
//};
