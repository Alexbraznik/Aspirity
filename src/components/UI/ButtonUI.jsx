import clsx from "clsx";

export function ButtonUI({
  children,
  width,
  px = "px-4",
  className,
  disabled,
}) {
  return (
    <button
      className={clsx(
        `bg-dark-bg-btn text-dark-text-primary uppercase font-semibold rounded ${px} py-2.5 ${width} ${className}`,
        disabled ? "opacity-30" : ""
      )}
    >
      {children}
    </button>
  );
}
