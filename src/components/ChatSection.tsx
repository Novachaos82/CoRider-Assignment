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
      if (lastPage.nextPage <= lastPage.totalPages) return lastPage.nextPage;
      return undefined;
    },
    initialPageParam: 0,
  });

  useEffect(() => {
    if (data) {
      //console.log("Fetched pages:", data.pages);
      setChatsPages([]);
      data.pages.map((page: ApiResponse) => {
        page.result.chats.map((chat: ChatMessage) => {
          setChatsPages((prev: ChatMessage[]) => [...prev, chat]);
        });
        //console.log("Fetched chats:", chatPages);
      });
    }
  }, [data]);

  return (
    <div
      id="scrollableDiv"
      className="max-h-screen overflow-y-scroll"
      style={{
        display: "flex",
        flexDirection: "column-reverse",
      }}
    >
      {/* infinite scrolling */}
      <InfiniteScroll
        dataLength={chatPages.length}
        next={() => fetchNextPage()}
        inverse={true}
        style={{
          display: "flex",
          flexDirection: "column-reverse",
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
              paddingBottom: "10px",
              paddingTop: "10px",
            }}
          >
            <LoaderCircle color="black" />
          </p>
        }
        data-testid="infinite-scroll"
        scrollableTarget="scrollableDiv"
        endMessage={
          <p
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              paddingTop: "10px",
            }}
          >
            <LoaderCircle color="black" />
          </p>
        }
      >
        <div className="flex flex-col-reverse gap-4 px-4  ">
          {chatPages.map((c) => (
            <div key={c.id} className=" text-[14px] font-normal">
              {/* if self background is blue  */}
              {c.sender.self ? (
                <div className="flex justify-end">
                  <div className="bg-[#1C63D5]  shadow-white-box text-white max-w-[287px] rounded-blue-box-radius p-2 ">
                    {c.message}
                  </div>
                </div>
              ) : (
                //else background is white and display sender image
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
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default ChatSection;
