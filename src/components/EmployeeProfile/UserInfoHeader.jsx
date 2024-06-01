import React, { useEffect, useState } from "react";
import { UserInfoInputUI } from "../UI/UserInfoInputUI";
import { ModalUserInfoUI } from "../UI/ModalUserInfoUI";
import { personalInfoArr } from "./constants";

export function UserInfoHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchCounties() {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();

        const formattedCountries = data.map((country) => ({
          value: country.name.common,
        }));
        setCountries(formattedCountries);
      } catch (error) {
        console.error("Error fetch countries", error);
      }
    }
    fetchCounties();
  }, []);

  return (
    <div className="mb-10">
      <ModalUserInfoUI
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        fields={personalInfoArr}
        title="Персональная информация"
        insetX="inset-x-[12%]"
        insetY="inset-y-1/4"
        countries={countries}
      />
      <div className="flex justify-between">
        <span className="text-dark-text-primary se:text-2xl font-medium leading-8">
          Персональная информация
        </span>
        <span
          className="text-dark-text-tertiary cursor-pointer font-medium text-sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          Изменить
        </span>
      </div>
      <form className="pt-8 grid grid-cols-2 gap-6">
        {personalInfoArr.map((field, index) => (
          <UserInfoInputUI
            key={index}
            labelChildren={field.label}
            inputChildren={field.value}
            colSpan={field.colSpan}
          />
        ))}
      </form>
    </div>
  );
}
