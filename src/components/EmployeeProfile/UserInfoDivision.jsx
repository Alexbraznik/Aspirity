import { UserInfoInputIU } from "../UI/UserInfoInputIU";

export function UserInfoDivision() {
  return (
    <div className="mb-10">
      <div className="flex justify-between">
        <span className="text-dark-text-primary">Подразделение</span>
        <span className="text-dark-text-tertiary cursor-pointer">Изменить</span>
      </div>
      <form className="pt-8 grid grid-cols-2 gap-6">
        <UserInfoInputIU labelChildren={"Отдел"} inputChildren="Дизайн" />
        <UserInfoInputIU
          labelChildren={"Руководитель"}
          inputChildren="Анна Кузнецова"
        />
        <UserInfoInputIU labelChildren={"Уровень"} inputChildren="Junior" />
        <UserInfoInputIU
          labelChildren={"Должность"}
          inputChildren="UI/UX designer"
        />
      </form>
    </div>
  );
}
