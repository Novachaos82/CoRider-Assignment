import { FC } from "react";
import logo from "@/assets/GroupTitle/Logo.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import dots from "@/assets/GroupTitle/dots-vertical.svg";
import { MessageSquareX, Phone, Users } from "lucide-react";

interface GroupTitleProps {}

const GroupTitle: FC<GroupTitleProps> = () => {
  return (
    <>
      <div className="px-4 flex items-center gap-4">
        {/* group image */}
        <div className="">
          <img
            className="rounded-full "
            src={logo}
            alt="Back"
            width={48}
            height={48}
          />
        </div>
        {/* group title */}
        <div className="flex-grow text-[16px]">
          <div className="text-[#606060]">
            From{" "}
            <span className="font-semibold text-[#141E0D]  text-[18px]">
              IGI Airport, T3
            </span>
          </div>
          <div className="text-[#606060]">
            To{" "}
            <span className="font-semibold text-[#141E0D]  text-[18px]">
              Sector 28
            </span>
          </div>
        </div>
        {/* dots  drodown  */}
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              <img src={dots} alt="dots" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="absolute -right-2 w-[156px]">
              <DropdownMenuItem>
                <Users size={20} /> Members
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Phone size={20} />
                Share Number
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <MessageSquareX size={20} />
                Report
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <hr className="border-1 border-[#E5E5E0]" />
    </>
  );
};

export default GroupTitle;
