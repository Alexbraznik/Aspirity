import { CardProfile } from "./CardProfile";
import { Header } from "./Header";
import { ProjectInfo } from "./ProjectInfo";
import { ReturnToEmployees } from "./ReturnToEmployees";
import { UserInfo } from "./UserInfo";

export function EmployeeProfile() {
  return (
    <div className="w-full bg-black flex flex-col sm:flex-row justify-center pb-32 font-poppins">
      <div className="w-full 2xl:px-[213px] lg:px-[7%] md:px-[5%] sm:px-[1%]">
        <Header />
        <ReturnToEmployees />
        <div className="w-full">
          <CardProfile />
          <div className="w-full flex flex-col sm:flex-row gap-4">
            <UserInfo />
            <ProjectInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
