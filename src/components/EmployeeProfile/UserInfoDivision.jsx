import { useState } from "react";
import { UserInfoInputIU } from "../UI/UserInfoInputIU";
import { personalDivisionArr } from "./constants";
import { ModalUserInfoUI } from "../UI/ModalUserInfoUI";

export function UserInfoDivision() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-10">
      <ModalUserInfoUI
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        fields={personalDivisionArr}
        title="Персональная информация"
        insetX="inset-x-[12%]"
        insetY="inset-y-1/4"
      />
      <div className="flex justify-between">
        <span className="text-dark-text-primary">Подразделение</span>
        <span
          className="text-dark-text-tertiary cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          Изменить
        </span>
      </div>
      <form className="pt-8 grid grid-cols-2 gap-6">
        {personalDivisionArr.map((field, index) => (
          <UserInfoInputIU
            key={index}
            labelChildren={field.label}
            inputChildren={field.value}
          />
        ))}
      </form>
    </div>
  );
}
