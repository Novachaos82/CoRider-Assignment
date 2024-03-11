//import axios from "axios";
//import { useInfiniteQuery } from "@tanstack/react-query";

//const fetchChat = async ({ pageParam = 0 }) => {
//  const response = await axios.get(
//    `https://qa.corider.in/assignment/chat?page=${pageParam}`
//  );
//  return response.data;
//};

//const useFetchChat = () => {
//  return useInfiniteQuery({
//    queryKey: ["chats"],
//    queryFn: fetchChat,
//    getNextPageParam: (lastPage: any, pages: any) => {
//      if (lastPage.chats.length === 0) {
//        return undefined; // No more pages to fetch
//      }
//      return pages.length; // Increment the page number
//    },
//  });
//};

//export default useFetchChat;
