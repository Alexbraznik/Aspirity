export function UserInfoInputUI({
  inputChildren,
  labelChildren,
  colSpan = "col-span-1",
}) {
  return (
    <div className={`text-dark-text-secondary relative ${colSpan}`}>
      <span className="absolute -top-2 left-2 bg-dark-bg-secondary text-xs leading-4">
        {labelChildren}
      </span>
      <p className="bg-dark-bg-secondary border border-dark-border-primary text-sm w-full leading-6 font-medium rounded px-3.5 py-2 truncate">
        {inputChildren}
      </p>
    </div>
  );
}
