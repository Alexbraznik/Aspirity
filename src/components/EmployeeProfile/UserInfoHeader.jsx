import { UserInfoInputIU } from "../UI/UserInfoInputIU";

export function UserInfoHeader() {
  return (
    <div className="mb-10">
      <div className="flex justify-between">
        <span className="text-dark-text-primary">Персональная информация</span>
        <span className="text-dark-text-tertiary cursor-pointer">Изменить</span>
      </div>
      <form className="pt-8 grid grid-cols-2 gap-6">
        <UserInfoInputIU labelChildren={"Имя"} inputChildren="Юрий" />
        <UserInfoInputIU labelChildren={"Фамилия"} inputChildren="Герыш" />
        <UserInfoInputIU
          labelChildren={"Отчество"}
          colSpan="col-span-2"
          inputChildren="Анреевич"
        />
        <UserInfoInputIU
          labelChildren={"Дата рождения"}
          inputChildren="06.01.2014"
        />
        <UserInfoInputIU
          labelChildren={"Дата трудоустройства"}
          inputChildren="05.05.2020"
        />
        <UserInfoInputIU labelChildren={"Страна"} inputChildren="Россия" />
        <UserInfoInputIU labelChildren={"Город"} inputChildren="Красноярск" />
        <UserInfoInputIU labelChildren={"Зарплата"} inputChildren="100 000 Р" />
        <UserInfoInputIU
          labelChildren={"Еженедельная зарплата"}
          inputChildren="23 000 Р"
        />
        <UserInfoInputIU
          labelChildren={"Номер счета"}
          colSpan="col-span-2"
          inputChildren="12345678912345678912"
        />
      </form>
    </div>
  );
}
