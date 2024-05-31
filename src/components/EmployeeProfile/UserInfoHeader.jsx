import React, { useEffect, useState } from "react";
import { UserInfoInputIU } from "../UI/UserInfoInputIU";
import { ModalUserInfoUI } from "../UI/ModalUserInfoUI";

export function UserInfoHeader() {
  const [isOpen, setIsOpen] = useState(true);
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
        <span className="text-dark-text-primary">Персональная информация</span>
        <span
          className="text-dark-text-tertiary cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          Изменить
        </span>
      </div>
      <form className="pt-8 grid grid-cols-2 gap-6">
        {personalInfoArr.map((field, index) => (
          <UserInfoInputIU
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

const personalInfoArr = [
  { label: "Имя", value: "Юрий" },
  { label: "Фамилия", value: "Герыш" },
  { label: "Отчество", value: "Андреевич", colSpan: "col-span-2" },
  { label: "Дата рождения", value: "06.01.2014" },
  { label: "Дата трудоустройства", value: "15.05.2020" },
  { label: "Страна", value: "Россия", isSelect: true },
  { label: "Город", value: "Красноярск", isSelect: true },
  { label: "Зарплата", value: "100 000 ₽" },
  { label: "Еженедельная зарплата", value: "23 000 ₽" },
  {
    label: "Номер счета",
    value: "12345678912345678912",
    colSpan: "col-span-2",
  },
];
