function Button({ children }) {
  return (
    <button className="bg-primary hover:bg-primaryHover text-white px-5 py-2 rounded-lg transition">
      {children}
    </button>
  );
}

export default Button;