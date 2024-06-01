import Image from "next/image";
import avatar from "./img/cardProfile/avatar.png";

export function CardProfile() {
  return (
    <div className="bg-dark-bg-secondary se:p-10 p-0 text-dark-text-primary mb-4 rounded-xl">
      <div className="w-full flex flex-col sm:flex-row items-center mb-[52px] se:py-0 pt-8">
        <div className="sm:flex items-center mr-12 se:ml-0 ml-[55px] se:py-0 pb-4">
          <div className="w-[160px] h-[160px] se:ml-0 ml-[20px] mb-4 se:-mr-0 ">
            <Image
              src={avatar}
              alt="avatar"
              layout="responsive"
              width={160}
              height={160}
            />
          </div>
          <div className="flex flex-col se:pl-12 pl-0 -mb-24">
            <div className="text-2xl se:block se:flex-col text-dark-text-primary se:leading-[56px] se:items-start items-center flex flex-col se:text-[46px] mb-8 font-bold">
              <span>Иванов</span>
              <br className="hidden se:block" />
              <span>Иван Иванович</span>
            </div>
            <div className="text-base flex flex-col gap-y-4 items-center se:items-start">
              <span>Junior UI/UX designer</span>
              <span>
                Россия, Красноярск
                <span className="text-[#76787A] px-1"> &#8226; 14:03</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex truncate uppercase items-center text-dark-text-primary font-semibold text-sm gap-x-4 border-b max-w-max pb-2.5 se:px-0 pl-4 pt-[68px] border-dark-border-primary">
        <span>Основная информация</span>
        <span>Отпуск</span>
        <span>Оборудование</span>
      </div>
    </div>
  );
}
