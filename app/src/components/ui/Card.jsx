function Card({ children }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 border border-greyBlue">
      {children}
    </div>
  );
}

export default Card;