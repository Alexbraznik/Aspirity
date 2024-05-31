export function ButtonUI({ children, width, px = "px-4" }) {
  return (
    <button
      className={`dark: bg-dark-bg-btn dark: text-dark-text-primary uppercase rounded ${px} py-2.5 ${width}`}
    >
      {children}
    </button>
  );
}
