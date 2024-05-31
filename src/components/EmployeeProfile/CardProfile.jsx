import Image from "next/image";
import avatar from "./img/cardProfile/avatar.png";

export function CardProfile() {
  return (
    <div className="bg-dark-bg-secondary p-10 text-dark-text-primary mb-4 rounded-xl">
      <div className="w-full flex mb-[52px]">
        <div>
          <Image src={avatar} alt="UserPhoto" width={160} height={160} />
        </div>
        <div className="pl-12">
          <div className="text-[46px] flex flex-col">
            <span>Иванов</span>
            <span>Иван Иванович</span>
            <div className="flex flex-col gap-y-4 pt-8">
              <span className="text-base">Junior UI/UX designer</span>
              <span className="text-base">
                Россия, Красноярск
                <span className="text-[#76787A] px-1"> &#8226; 14:03</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex uppercase text-dark-text-primary gap-x-4 border-b max-w-max pb-2.5 border-dark-border-primary">
        <span>Основная информация</span>
        <span>Отпуск</span>
        <span>Оборудование</span>
      </div>
    </div>
  );
}
