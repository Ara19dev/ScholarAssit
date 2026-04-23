import DashboardCard from "../components/dashboard/DashboardCard";
import RecentActivity from "../components/dashboard/RecentActivity";
import ResearchGraph from "../components/graph/ResearchGraph";

function Dashboard() {

  return (
    <div className="min-h-screen bg-bgMain p-10">

      <h1 className="text-3xl font-bold text-primary mb-8">
        Research Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6 mb-8">

        <DashboardCard
          title="Uploaded Papers"
          value="12"
        />

        <DashboardCard
          title="Questions Asked"
          value="48"
        />

        <DashboardCard
          title="Saved Citations"
          value="20"
        />

      </div>

      <div className="grid grid-cols-2 gap-6">

        <RecentActivity />

        <ResearchGraph />

      </div>

    </div>
  );
}

export default Dashboard;