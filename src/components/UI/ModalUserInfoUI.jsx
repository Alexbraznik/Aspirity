import clsx from "clsx";
import { ButtonUI } from "./ButtonUI";
import { useForm } from "react-hook-form";

export function ModalUserInfoUI({
  isOpen,
  setIsOpen,
  fields,
  title,
  insetX,
  insetY,
  countries,
  cities,
  userInfoUpdate,
  isPersonalInfo,
  setSelectedCountry,
}) {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    userInfoUpdate(data);
    setIsOpen(false);
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  function closeModal(event) {
    if (event.target.classList.contains("modal")) {
      setIsOpen(false);
    }
  }

  const getErrorMessage = (fieldType, required) => {
    if (required) return "Поле обязательно!";
    return fieldType === "string" ? "Введите буквы!" : "Введите цифры!";
  };

  return (
    isOpen && (
      <div
        className="modal bg-black/90 fixed inset-0 z-10 flex justify-center items-center overflow-auto"
        onClick={closeModal}
      >
        <div className={`modal w-full md:w-3/4 se:fixed ${insetX} ${insetY}`}>
          <div className="bg-dark-bg-secondary p-8 rounded-lg">
            <div className="text-4xl flex justify-between items-center">
              <span className="text-dark-text-primary text-4xl">{title}</span>
              <span
                className="text-5xl text-dark-text-secondary cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                &times;
              </span>
            </div>
            <form
              className="pt-8 grid gap-6 sm:grid-cols-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              {fields.map((field, index) => (
                <div
                  className={clsx("text-dark-text-secondary relative", {
                    "sm:col-span-2":
                      isPersonalInfo && (index === 2 || index === 9),
                  })}
                  key={index}
                >
                  <span className="absolute -top-2 left-2 bg-dark-bg-secondary text-xs">
                    {field.label}
                  </span>

                  {field.isSelect ? (
                    <select
                      className="bg-dark-bg-secondary border border-dark-border-primary text-sm w-full rounded px-3.5 py-2"
                      {...register(field.name)}
                      onChange={
                        field.name === "country" ? handleCountryChange : null
                      }
                    >
                      {field.name === "country"
                        ? countries.map((el, index) => (
                            <option key={index} value={el.value}>
                              {el.value}
                            </option>
                          ))
                        : field.name === "city"
                        ? cities.map((city, index) => (
                            <option key={index} value={city}>
                              {city}             
                            </option>
                          ))
                        : field.options &&
                          field.options.map((option, index) => (
                            <option key={index} value={option}>
                              {option}           
                            </option>
                          ))}
                    </select>
                  ) : (
                    <input
                      className="bg-dark-bg-secondary border border-dark-border-primary text-sm w-full rounded px-3.5 py-2"
                      defaultValue={field.value}
                      {...register(field.name, {
                        required: true,
                        pattern:
                          field.type === "string"
                            ? /^[a-zA-Zа-яА-Я]*$/
                            : field.type === "number"
                            ? /^(?!\s*$)[\d\s₽.]+$/i
                            : null,
                      })}
                    ></input>
                  )}
                  <div>
                    {errors?.[field.name] && (
                      <p className="text-xs color: text-red-600">
                        {getErrorMessage(
                          field.type,
                          errors[field.name]?.type === "required"
                        )}
                      </p>
                    )}
                  </div>
                </div>
              ))}
              <div className="pt-10 col-span-2">
                <ButtonUI
                  className="w-full"
                  type="submit"
                  onClick={() => setIsOpen(false)}
                  disabled={!isValid}
                >
                  Сохранить
                </ButtonUI>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
}
