import { UnionLeft } from "./img/ReturnToEmployees/UnionLeft";

export function ReturnToEmployees() {
  return (
    <div className="flex items-center gap-x-4 uppercase py-2">
      <UnionLeft />
      <span className="dark: text-[#76787A]">Вернуться к сотрудникам</span>
    </div>
  );
}
