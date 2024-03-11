import axios from "axios";
import { FC, useEffect, useState } from "react";
import check from "@/assets/ChatSection/check.svg";
import { useInfiniteQuery } from "@tanstack/react-query";

import InfiniteScroll from "react-infinite-scroll-component";
import { LoaderCircle } from "lucide-react";

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

interface result {
  chats: ChatMessage[];
  from: string;
  message: string;
  name: string;
  status: string;
  to: string;
}

interface ApiResponse {
  nextPage: number;
  result: result;

  totalPages: number;
}

const ChatSection: FC<ChatSectionProps> = () => {
  const [chatPages, setChatsPages] = useState<ChatMessage[]>([]);

  const fetchChats = async ({ pageParam = 0 }): Promise<ApiResponse> => {
    const res = await axios.get(
      `https://qa.corider.in/assignment/chat?page=${pageParam}&limit=10`
    );
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const result = res.data;
    return { result, nextPage: pageParam + 1, totalPages: 20 };
  };

  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["chats"],
    queryFn: fetchChats,
    getNextPageParam: (lastPage) => {
      //console.log("lastPage ", lastPage);
      //console.log("lastPage total", lastPage.totalPages);

      //console.log("pages", pages);

      if (lastPage.nextPage <= lastPage.totalPages) return lastPage.nextPage;
      return undefined;
    },
    initialPageParam: 0,
  });

  useEffect(() => {
    if (data) {
      console.log("Fetched pages:", data.pages);
      setChatsPages([]);
      data.pages.map((page: ApiResponse) => {
        page.result.chats.map((chat: ChatMessage) => {
          setChatsPages((prev: ChatMessage[]) => [...prev, chat]);
        });
        console.log("Fetched chats:", chatPages);
      });
    }
  }, [data]);

  //const [chat, setChat] = useState<ChatMessage[]>([]);
  //useEffect(() => {
  //  const fetchChat = async () => {
  //    const chat = await axios.get(
  //      "https://qa.corider.in/assignment/chat?page=0"
  //    );
  //    setChat(chat.data.chats);
  //    console.log(chat);
  //  };
  //  fetchChat();
  //}, []);

  return (
    <div
      id="scrollableDiv"
      className="max-h-screen overflow-y-scroll"
      style={{
        display: "flex",
        flexDirection: "column-reverse",
      }}
    >
      <InfiniteScroll
        dataLength={chatPages.length}
        next={() => fetchNextPage()}
        inverse={true}
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          padding: "5px",
        }}
        hasMore={!!hasNextPage}
        loader={
          <p
            style={{
              color: "deepskyblue",
              fontSize: "20px",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              paddingBottom: "5px",
            }}
          >
            <LoaderCircle color="black" />
          </p>
        }
        data-testid="infinite-scroll"
        scrollableTarget="scrollableDiv"
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="flex flex-col-reverse gap-4 px-4  ">
          {/*<div onClick={() => fetchNextPage()}>click me</div>*/}
          {chatPages.map((c) => (
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
      </InfiniteScroll>
    </div>
  );
};

export default ChatSection;
