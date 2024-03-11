import axios from "axios";
import { FC, useEffect, useRef, useState } from "react";
import check from "@/assets/ChatSection/check.svg";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import { nanoid } from "nanoid";
import InfiniteScrollReverse from "react-infinite-scroll-reverse";
interface ChatSectionProps {}

interface Sender {
  image: string;
  is_kyc_verified: boolean;
  self: boolean;
  user_id: string;
}

interface ChatMessage {
  id: string;
  message: string;
  sender: Sender;
  time: string;
}

//interface ApiResponse {
//  chats: ChatMessage[];
//  from: string;
//  message: string;
//  name: string;
//  status: string;
//  to: string;
//}

const ChatSection: FC<ChatSectionProps> = () => {
  //const [chatPages, setChatsPages] = useState<any>([]);

  //const fetchChats = async ({ pageParam = 1 }) => {
  //  const res = await axios.get(
  //    "https://qa.corider.in/assignment/chat?page=" + pageParam
  //  );
  //  await new Promise((resolve) => setTimeout(resolve, 1000));
  //  return res.data;
  //};

  //const { data, hasNextPage, fetchNextPage } = useInfiniteQuery({
  //  queryKey: ["chats"],
  //  queryFn: fetchChats,
  //  getNextPageParam: (lastPage, pages) => {
  //    return pages.length + 1;
  //  },
  //});

  //useEffect(() => {
  //  if (data) {
  //    //console.log("Fetched pages:", data.pages);
  //    data.pages.map((page) => {
  //      setChatsPages((prev) => [...prev, ...page.chats]);

  //      console.log("Fetched pages:", chatPages);
  //    });
  //  }
  //}, [data]);

  const [chat, setChat] = useState<ChatMessage[]>([]);
  useEffect(() => {
    const fetchChat = async () => {
      const chat = await axios.get(
        "https://qa.corider.in/assignment/chat?page=0"
      );
      setChat(chat.data.chats);
      console.log(chat);
    };
    fetchChat();
  }, []);

  return (
    //<div
    //  id="scrollableDiv"
    //  className="h-[300px]"
    //  style={{
    //    display: "flex",
    //    flexDirection: "column-reverse",
    //    overflow: "scroll",
    //  }}
    //>
    //  <InfiniteScroll
    //    dataLength={chatPages.length}
    //    next={() => fetchNextPage()}
    //    inverse={true}
    //    style={{
    //      display: "flex",
    //      flexDirection: "column-reverse",
    //      padding: "5px",
    //    }}
    //    hasMore={!!hasNextPage}
    //    loader={
    //      <p
    //        style={{
    //          color: "deepskyblue",
    //          fontSize: "20px",
    //          textAlign: "center",
    //        }}
    //      >
    //        <b>Loading...</b>
    //      </p>
    //    }
    //    data-testid="infinite-scroll"
    //    scrollableTarget="scrollableDiv"
    //    endMessage={
    //      <p style={{ textAlign: "center" }}>
    //        <b>Yay! You have seen it all</b>
    //      </p>
    //    }
    //  >
    <div className="flex flex-col-reverse gap-4 px-4  ">
      {/*<div onClick={() => fetchNextPage()}>click me</div>*/}
      {chat.map((c) => (
        <div key={nanoid()} className=" text-[14px] font-normal">
          {c.sender.self ? (
            <div className="flex justify-end">
              <div className="bg-[#1C63D5]  shadow-white-box text-white max-w-[287px] rounded-blue-box-radius p-2 ">
                {c.message}
              </div>
            </div>
          ) : (
            <div className="flex gap-2">
              <div>
                <div className="relative inline-block">
                  <img
                    src={c.sender.image}
                    alt="image"
                    className="rounded-full w-[26px] h-[26px]"
                  />
                  <img
                    src={check}
                    alt=""
                    width={7}
                    height={7}
                    className="absolute bottom-0 right-0  rounded-full "
                  />
                </div>
              </div>

              <div className="bg-white shadow-white-box text-[#606060] max-w-[287px] rounded-white-box-radius p-2 ">
                {c.message}
              </div>
            </div>
          )}
        </div>
      ))}
      {/*{chat.map((c) => (
        <div key={c.id} className=" text-[14px] font-normal">
          {c.sender.self ? (
            <div className="flex justify-end">
              <div className="bg-[#1C63D5]  shadow-white-box text-white max-w-[287px] rounded-blue-box-radius p-2 ">
                {c.message}
              </div>
            </div>
          ) : (
            <div className="flex gap-2">
              <div>
                <div className="relative inline-block">
                  <img
                    src={c.sender.image}
                    alt="image"
                    className="rounded-full w-[26px] h-[26px]"
                  />
                  <img
                    src={check}
                    alt=""
                    width={7}
                    height={7}
                    className="absolute bottom-0 right-0  rounded-full "
                  />
                </div>
              </div>

              <div className="bg-white shadow-white-box text-[#606060] max-w-[287px] rounded-white-box-radius p-2 ">
                {c.message}
              </div>
            </div>
          )}
        </div>
      ))}*/}
    </div>
    //  </InfiniteScroll>
    //</div>
  );
};

export default ChatSection;
