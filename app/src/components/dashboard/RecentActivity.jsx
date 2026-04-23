function RecentActivity() {

  const activities = [
    "Uploaded Transformer Architecture.pdf",
    "Generated summary for GPT Paper",
    "Asked question about Attention Mechanism",
    "Saved citation for NLP Paper"
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-greyBlue">

      <h3 className="text-primary font-semibold mb-4">
        Recent Activity
      </h3>

      <ul className="space-y-3">

        {activities.map((item, index) => (
          <li key={index} className="text-textSecondary">
            {item}
          </li>
        ))}

      </ul>

    </div>
  );
}

export default RecentActivity;