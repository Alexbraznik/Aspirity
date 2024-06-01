export function ButtonUI({ children, width, px = "px-4", className }) {
  return (
    <button
      className={`bg-dark-bg-btn text-dark-text-primary uppercase font-semibold rounded ${px} py-2.5 ${width} ${className} `}
    >
      {children}
    </button>
  );
}
