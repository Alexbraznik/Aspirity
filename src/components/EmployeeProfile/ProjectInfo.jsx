import Image from "next/image";
import Anna from "./img/projectInfo/Anna.png";
import avatarGroupList from "./img/projectInfo/avatarGroupList.png";
import { UnionLeftArrow } from "./img/projectInfo/UnionLeftArrow";
import { ButtonUI } from "../UI/ButtonUI";

export function ProjectInfo() {
  return (
    <div className="w-full h-max bg-dark-bg-secondary rounded-xl">
      <div className="p-[30px] text-dark-text-primary ">
        <div className="flex justify-between items-center">
          <span className="text-2xl">Загрузка сотрудника</span>
          <span className="text-[#D77556]">100%</span>
        </div>

        <div className="flex flex-col">
          <div className="py-10">
            <div className="flex gap-x-[80px]">
              <div className="flex flex-col w-[183px]">
                <span className="text-dark-text-tertiary">
                  Название проекта
                </span>
                <span className="pt-2">MedPoint 24</span>
              </div>
              <div className="flex flex-col">
                <span className="text-dark-text-tertiary">Тип проекта</span>
                <span className="pt-2">Коммерческий</span>
              </div>
            </div>
          </div>

          <div className="flex gap-x-[80px] w-min">
            <div className="flex flex-col w-[183px]">
              <span className="text-dark-text-tertiary">Ответственный</span>
              <div className="flex pt-2 items-center">
                <Image src={Anna} alt="avatar" />
                <span className="pl-2">Анна Кузнецова</span>
              </div>
            </div>
            <div className="flex flex-col  w-[183px]">
              <span className="text-dark-text-tertiary">Команда</span>
              <div className="flex pt-2 items-center">
                <Image src={avatarGroupList} alt="avatarGroupList" />
                <span className="pl-2">+2</span>
              </div>
            </div>
          </div>

          <div className="py-10">
            <span>Сроки работы</span>
            <div className="flex items-center gap-2 pt-2">
              <span>03 марта 2023</span>
              <UnionLeftArrow />
              <span>23 марта 2023</span>
            </div>
          </div>
          <ButtonUI children="Посмотреть всю загрузку" />
        </div>
      </div>
    </div>
  );
}
