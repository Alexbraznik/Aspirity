import { UserInfoContacts } from "./UserInfoContacts";
import { UserInfoDivision } from "./UserInfoDivision";
import { UserInfoHeader } from "./UserInfoHeader";

export function UserInfo() {
  return (
    <div className="w-screen bg-dark-bg-secondary rounded-xl">
      <div className="p-[30px]">
        <UserInfoHeader />
        <UserInfoDivision />
        <UserInfoContacts />
      </div>
    </div>
  );
}
