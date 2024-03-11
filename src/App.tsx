import "./App.css";
import ChatSection from "./components/ChatSection";
import GroupTitle from "./components/GroupTitle";
import Header from "./components/Header";
import clip from "@/assets/paperclip.svg";
import send from "@/assets/send.svg";

function App() {
  return (
    <>
      <div className="bg-[#FAF9F4]  font-mulish  flex flex-col">
        <div className="flex flex-col gap-4 sticky w-full top-0 z-30 bg-white">
          <Header />
          <GroupTitle />
        </div>
        <div className="  border-0  pb-4 ">
          <ChatSection />
        </div>
        <div className="sticky bottom-0 p-4 bg-[#FAF9F4]">
          <div className="relative flex items-center justify-end ">
            <input
              className="bg-white w-full outline-none p-2 rounded-[8px]"
              placeholder="Type a message"
            />

            <img src={clip} alt="clip" className="absolute right-10" />
            <img src={send} alt="send" className="absolute right-2" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
