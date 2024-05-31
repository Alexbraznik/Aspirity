import { Header } from "./Header";
import { ReturnToEmployees } from "./ReturnToEmployees";

export function EmployeeProfile() {
  return (
    <div className="w-full h-full bg-black flex justify-center">
      <div className="w-full px-[213px]">
        <Header />
        <ReturnToEmployees />
      </div>
    </div>
  );
}
