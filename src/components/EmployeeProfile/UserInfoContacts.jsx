import { UserInfoInputIU } from "../UI/UserInfoInputIU";

export function UserInfoContacts() {
  return (
    <div>
      <div className="flex justify-between">
        <span className="text-dark-text-primary">Контакты</span>
        <span className="text-dark-text-tertiary cursor-pointer">Изменить</span>
      </div>
      <form className="pt-8 grid grid-cols-2 gap-6">
        <UserInfoInputIU
          labelChildren={"Номер телефона"}
          inputChildren="+7 (999) 999-99-99"
        />
        <UserInfoInputIU
          labelChildren={"Электронная почта"}
          inputChildren="test@gmail.com"
        />
        <UserInfoInputIU labelChildren={"Telegram"} inputChildren="@tg" />
        <UserInfoInputIU labelChildren={"Slack"} inputChildren="@slack" />
      </form>
    </div>
  );
}
