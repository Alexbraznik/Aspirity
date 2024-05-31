export function UserInfoInputIU({
  inputChildren,
  labelChildren,
  colSpan = "col-span-1",
}) {
  return (
    <div className={`text-dark-text-secondary relative ${colSpan}`}>
      <span className="absolute -top-2 left-2 bg-dark-bg-secondary text-xs">
        {labelChildren}
      </span>
      <p className="bg-dark-bg-secondary border border-dark-border-primary text-sm w-full rounded px-3.5 py-2">
        {inputChildren}
      </p>
    </div>
  );
}
