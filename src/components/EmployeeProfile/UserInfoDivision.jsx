import { useState } from "react";
import { UserInfoInputUI } from "../UI/UserInfoInputUI";
import { personalDivisionArr } from "./constants";
import { ModalUserInfoUI } from "../UI/ModalUserInfoUI";

export function UserInfoDivision() {
  const [isOpen, setIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const userInfoUpdate = (data) => {
    setUserInfo(data);
  };

  return (
    <div className="mb-10">
      <ModalUserInfoUI
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        fields={personalDivisionArr}
        title="Персональная информация"
        userInfoUpdate={userInfoUpdate}
        personalDivisionOptions={
          personalDivisionArr.find(
            (field) => field.category === "personalDivision"
          ).options
        }
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
            inputChildren={userInfo[field.name] || field.value}
          />
        ))}
      </form>
    </div>
  );
}
