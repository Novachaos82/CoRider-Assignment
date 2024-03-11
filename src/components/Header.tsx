import { FC } from "react";
import Back from "../assets/Header/Back.svg";
import edit from "../assets/Header/edit.svg";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div className="flex px-4 items-center text-[24px] gap-3 font-bold">
      <img src={Back} alt="Back" width={24} height={24} />
      <div className="flex-grow">Trip 1</div>
      <img src={edit} alt="Back" width={20} height={20} />
    </div>
  );
};

export default Header;
