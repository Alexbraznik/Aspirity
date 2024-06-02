import { useState } from "react";
import { ModalUserInfoUI } from "../UI/ModalUserInfoUI";
import { UserInfoInputUI } from "../UI/UserInfoInputUI";
import { personalContactsArr } from "./constants";

export function UserInfoContacts() {
  const [isOpen, setIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const userInfoUpdate = (data) => {
    setUserInfo(data);
  };
  return (
    <div>
      <ModalUserInfoUI
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        fields={personalContactsArr}
        title="Персональная информация"
        insetX="inset-x-[12%]"
        insetY="inset-y-1/4"
        userInfoUpdate={userInfoUpdate}
      />
      <div className="flex justify-between">
        <span className="text-dark-text-primary se:text-2xl font-medium leading-8">
          Контакты
        </span>
        <span
          className="text-dark-text-tertiary cursor-pointer font-medium text-sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          Изменить
        </span>
      </div>
      <form className="pt-8 grid grid-cols-2 gap-6">
        {personalContactsArr.map((field, index) => (
          <UserInfoInputUI
            key={index}
            labelChildren={field.label}
            inputChildren={userInfo[field.name] || field.value}
          />
        ))}
      </form>
    </div>
  );
}
