import Image from "next/image";
import { ButtonUI } from "../UI/ButtonUI";
import { LogoAspirity } from "./img/header/LogoAspirity";
import avatar from "./img/header/avatar.png";
import { UnionDown } from "./img/header/UnionDown";
import { UnionBurger } from "./img/header/UnionBurger";

export function Header() {
  return (
    <div className="w-full flex justify-between items-center px-4 py-6">
      <LogoAspirity className="w-[180px] h-[40px]" />
      <div className="flex gap-x-2 items-center">
        <ButtonUI className="hidden sm:block" children={"Создать счет"} />
        <ButtonUI className="hidden sm:block" children={"Корзина"} />
        <div className="border border-[#363738]  rounded-full flex items-center py-1.5 px-4 gap-x-1">
          <Image src={avatar} alt="avatar" width={24} height={24} />
          <UnionDown />
        </div>
        <UnionBurger className="ml-2" />
      </div>
    </div>
  );
}
