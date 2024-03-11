import "./App.css";
import ChatSection from "./components/ChatSection";
import GroupTitle from "./components/GroupTitle";
import Header from "./components/Header";
import clip from "@/assets/paperclip.svg";
import send from "@/assets/send.svg";
import camera from "@/assets/clip/camera.svg";
import video from "@/assets/clip/video.svg";
import document from "@/assets/clip/document.svg";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function App() {
  return (
    <>
      <div className="bg-[#FAF9F4]  font-mulish  flex flex-col">
        {/* Header section */}
        <section className="flex flex-col gap-4 sticky w-full top-0 z-30 bg-white">
          <Header />
          <GroupTitle />
        </section>
        {/* Chat section */}
        <section className="  border-0 ">
          <ChatSection />
        </section>

        {/* textbox section */}
        <section className="sticky bottom-0 p-4 ">
          <div className="relative flex items-center justify-end ">
            <input
              className="bg-white w-full outline-none p-2 rounded-[8px]"
              placeholder="Type a message"
            />
            <div className="absolute  right-10 p-0 ">
              <div className="flex items-center relative">
                <DropdownMenu>
                  <DropdownMenuTrigger className="outline-none p-0">
                    <img src={clip} alt="clip" className="" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="z-40 absolute bottom-8  -right-16 w-[124px] flex rounded-full bg-[#008000] broder-0">
                    <DropdownMenuItem>
                      <img
                        src={camera}
                        alt="clip"
                        className=""
                        width={20}
                        height={20}
                      />
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <img
                        src={video}
                        alt="clip"
                        className=""
                        width={20}
                        height={20}
                      />
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <img
                        src={document}
                        alt="clip"
                        className=""
                        width={20}
                        height={20}
                      />
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <div className="absolute right-2">
              <img src={send} alt="send" className="" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
