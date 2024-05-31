import { CardProfile } from "./CardProfile";
import { Header } from "./Header";
import { ProjectInfo } from "./ProjectInfo";
import { ReturnToEmployees } from "./ReturnToEmployees";
import { UserInfo } from "./UserInfo";

export function EmployeeProfile() {
  return (
    <div className="w-full h-full bg-black flex justify-center">
      <div className="w-full px-[213px]">
        <Header />
        <ReturnToEmployees />
        <div className="w-full h-full">
          <CardProfile />
          <UserInfo />
          {/* <ProjectInfo /> */}
        </div>
      </div>
    </div>
  );
}
