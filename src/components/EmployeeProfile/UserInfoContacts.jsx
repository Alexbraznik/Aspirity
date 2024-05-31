import { useState } from "react";
import { ModalUserInfoUI } from "../UI/ModalUserInfoUI";
import { UserInfoInputIU } from "../UI/UserInfoInputIU";
import { personalContactsArr } from "./constants";

export function UserInfoContacts() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <ModalUserInfoUI
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        fields={personalContactsArr}
        title="Персональная информация"
        insetX="inset-x-[12%]"
        insetY="inset-y-1/4"
      />
      <div className="flex justify-between">
        <span className="text-dark-text-primary">Контакты</span>
        <span
          className="text-dark-text-tertiary cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          Изменить
        </span>
      </div>
      <form className="pt-8 grid grid-cols-2 gap-6">
        {personalContactsArr.map((field, index) => (
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
