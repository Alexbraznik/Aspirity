import React, { useEffect, useState } from "react";
import { UserInfoInputUI } from "../UI/UserInfoInputUI";
import { ModalUserInfoUI } from "../UI/ModalUserInfoUI";
import { personalInfoArr } from "./constants";

export function UserInfoHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [cities, setCities] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    async function fetchCounties() {
      try {
        const response = await fetch(
          "https://countriesnow.space/api/v0.1/countries"
        );
        const data = await response.json();

        const formattedCountries = data.data.map((country) => ({
          value: country.country,
          cities: country.cities,
        }));
        setCountries(formattedCountries);
      } catch (error) {
        console.error("Error fetch countries", error);
      }
    }
    fetchCounties();
  }, []);

  useEffect(() => {
    const country = countries.find((c) => c.value === selectedCountry);
    setCities(country ? country.cities : []);
  }, [selectedCountry, countries]);

  const userInfoUpdate = (data) => {
    setUserInfo(data);
  };

  return (
    <div className="mb-10">
      <ModalUserInfoUI
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        fields={personalInfoArr}
        title="Персональная информация"
        countries={countries}
        cities={cities}
        userInfoUpdate={userInfoUpdate}
        isPersonalInfo={true}
        setSelectedCountry={setSelectedCountry}
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
            inputChildren={userInfo[field.name] || field.value}
            colSpan={field.colSpan}
          />
        ))}
      </form>
    </div>
  );
}
