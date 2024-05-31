import clsx from "clsx";
import { ButtonUI } from "./ButtonUI";
import { UserInfoInputIU } from "./UserInfoInputIU";

export function ModalUserInfoUI({
  isOpen,
  setIsOpen,
  fields,
  title,
  insetX,
  insetY,
  countries,
}) {
  function closeModal(event) {
    if (event.target.classList.contains("modal")) {
      setIsOpen(false);
    }
  }

  return (
    isOpen && (
      <div
        className="modal bg-black/90 fixed inset-0 z-10 w-screen h-screen"
        onClick={closeModal}
      >
        <div className={`modal w-3/4 fixed ${insetX} ${insetY}`}>
          <div className="bg-dark-bg-secondary p-8 rounded-lg">
            <div className="text-4xl flex justify-between items-center">
              <span className="text-dark-text-primary">{title}</span>
              <span
                className="text-5xl text-dark-text-secondary cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                &times;
              </span>
            </div>
            <form className="pt-8 grid grid-cols-2 gap-6">
              {fields.map((field, index) => (
                <div
                  className={`text-dark-text-secondary relative ${
                    field.colSpan || "col-span-1"
                  }`}
                  key={index}
                >
                  <span className="absolute -top-2 left-2 bg-dark-bg-secondary text-xs">
                    {field.label}
                  </span>
                  {field.isSelect ? (
                    <select className="bg-dark-bg-secondary border border-dark-border-primary text-sm w-full rounded px-3.5 py-2">
                      {countries &&
                        countries.map((el, index) => (
                          <option key={index} value={el.value}>
                            {el.value}
                          </option>
                        ))}
                    </select>
                  ) : (
                    <p className="bg-dark-bg-secondary border border-dark-border-primary text-sm w-full rounded px-3.5 py-2">
                      {field.value}
                    </p>
                  )}
                </div>
              ))}
            </form>
            <div className="flex justify-center mt-4 pt-10">
              <ButtonUI onClick={() => setIsOpen(false)}>Сохранить</ButtonUI>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
