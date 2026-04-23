function DashboardCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-greyBlue">

      <h3 className="text-textSecondary text-sm">
        {title}
      </h3>

      <p className="text-2xl font-bold text-primary mt-2">
        {value}
      </p>

    </div>
  );
}

export default DashboardCard;