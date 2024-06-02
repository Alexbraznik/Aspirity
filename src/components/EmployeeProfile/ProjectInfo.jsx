import Image from "next/image";
import Anna from "./img/projectInfo/Anna.png";
import avatarGroupList from "./img/projectInfo/avatarGroupList.png";
import { UnionLeftArrow } from "./img/projectInfo/UnionLeftArrow";
import { ButtonUI } from "../UI/ButtonUI";

export function ProjectInfo() {
  return (
    <div className="w-full h-max bg-dark-bg-secondary rounded-xl">
      <div className="se:p-[30px] p-0 px-4 py-8 text-dark-text-primary ">
        <div className="flex justify-between items-center">
          <span className="se:text-2xl font-medium leading-8">
            Загрузка сотрудника
          </span>
          <span className="text-[#D77556]">100%</span>
        </div>

        <div className="flex flex-col leading-8">
          <div className="se:py-10 pt-8 pb-4">
            <div className="se:flex gap-x-[80px] xl:gap-x-24">
              <div className="se:flex se:flex-col se:w-[24%]">
                <span className="text-dark-text-tertiary leading-6 md:whitespace-nowrap">
                  Название проекта
                </span>
                <br className="se:hidden block" />
                <span className="pt-2 leading-6">MedPoint 24</span>
              </div>
              <div className="se:flex se:flex-col se:w-[24%]">
                <span className="text-dark-text-tertiary leading-6">
                  Тип проекта
                </span>
                <br className="se:hidden block" />
                <span className="pt-2 leading-6">Коммерческий</span>
              </div>
            </div>
          </div>

          <div className="se:flex se:gap-x-[80px] xl:gap-x-24">
            <div className="flex flex-col se:w-[26%]">
              <span className="text-dark-text-tertiary leading-6">
                Ответственный
              </span>
              <div className="flex pt-2 items-center">
                <Image src={Anna} alt="avatar" />
                <span className="pl-2 leading-6">Анна Кузнецова</span>
              </div>
            </div>
            <div className="flex flex-col se:w-[24%] se:py-0 py-4 se:-ml-[10px] ml-0">
              <span className="text-dark-text-tertiary leading-6 ">
                Команда
              </span>
              <div className="flex items-center">
                <Image src={avatarGroupList} alt="avatarGroupList" />
                <span className="pl-2">+2</span>
              </div>
            </div>
          </div>

          <div className="se:py-10 text-dark-text-secondary">
            <span className="text-dark-text-tertiary leading-6 ">
              Сроки работы
            </span>
            <div className="flex items-center leading-6 gap-2 pt-2 mb-8 ">
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
