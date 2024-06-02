export const personalInfoArr = [
  { label: "Имя", value: "Юрий", name: "firstname", type: "string" },
  { label: "Фамилия", value: "Герыш", name: "lastname", type: "string" },
  {
    label: "Отчество",
    value: "Андреевич",
    name: "middlename",
    colSpan: "col-span-2",
    type: "string",
  },
  {
    label: "Дата рождения",
    value: "06.01.2014",
    name: "birthdate",
    type: "number",
  },
  {
    label: "Дата трудоустройства",
    value: "15.05.2020",
    name: "employmentDate",
    type: "number",
  },
  { label: "Страна", value: "Россия", name: "country", isSelect: true },
  { label: "Город", value: "Красноярск", name: "city", isSelect: true },
  { label: "Зарплата", value: "100 000 ₽", name: "salary", type: "number" },
  {
    label: "Еженедельная зарплата",
    value: "23 000 ₽",
    name: "weeklySalary",
    type: "number",
  },
  {
    label: "Номер счета",
    value: "12345678912345678912",
    colSpan: "col-span-2",
    name: "accountNumber",
    type: "number",
  },
];

export const personalDivisionArr = [
  {
    label: "Отдел",
    value: "Дизайн",
    isSelect: true,
    options: ["Дизайн", "Художественный", "Разработка"],
    name: "department",
    category: "personalDivision",
  },
  {
    label: "Руководитель",
    value: "Анна Кузнецова",
    name: "supervisor",
    type: "any",
    category: "personalDivision",
  },
  {
    label: "Уровень",
    value: "Junior",
    isSelect: true,
    options: ["Junior", "Middle", "Senior"],
    name: "level",
    category: "personalDivision",
  },
  {
    label: "Должность",
    value: "UI/UX designer",
    isSelect: true,
    options: ["UI/UX designer", "Ещё должность", "Третья должность"],
    name: "position",
    category: "personalDivision",
  },
];

export const personalContactsArr = [
  {
    label: "Номер телефона",
    value: "+7 (999) 999-99-99",
    name: "phone",
    type: "any",
  },
  {
    label: "Электронная почта",
    value: "test@gmail.com",
    name: "email",
    type: "any",
  },
  { label: "Telegram", value: "@tg", name: "telegram", type: "any" },
  { label: "Slack", value: "@slack", name: "slack", type: "any" },
];
