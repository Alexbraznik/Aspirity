import { useState } from "react";
import { UserInfoInputUI } from "../UI/UserInfoInputUI";
import { personalDivisionArr } from "./constants";
import { ModalUserDivisionUI } from "../UI/ModalUserDivisionUI";

export function UserInfoDivision() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-10">
      <ModalUserDivisionUI
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        fields={personalDivisionArr}
        title="Персональная информация"
        insetX="inset-x-[12%]"
        insetY="inset-y-1/4"
      />
      <div className="flex justify-between">
        <span className="text-dark-text-primary se:text-2xl font-medium leading-8">
          Подразделение
        </span>
        <span
          className="text-dark-text-tertiary cursor-pointer font-medium text-sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          Изменить
        </span>
      </div>
      <form className="pt-8 grid grid-cols-2 gap-6">
        {personalDivisionArr.map((field, index) => (
          <UserInfoInputUI
            key={index}
            labelChildren={field.label}
            inputChildren={field.value}
          />
        ))}
      </form>
    </div>
  );
}
