import { CardProfile } from "./CardProfile";
import { Header } from "./Header";
import { ProjectInfo } from "./ProjectInfo";
import { ReturnToEmployees } from "./ReturnToEmployees";
import { UserInfo } from "./UserInfo";

export function EmployeeProfile() {
  return (
    <div className="w-full bg-black flex justify-center pb-32">
      <div className="w-full px-[213px]">
        <Header />
        <ReturnToEmployees />
        <div className="w-full">
          <CardProfile />
          <div className="flex gap-4">
            <UserInfo />
            <ProjectInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
