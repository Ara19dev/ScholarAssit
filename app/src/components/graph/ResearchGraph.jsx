import { ScatterChart, Scatter, XAxis, YAxis, Tooltip } from "recharts";

function ResearchGraph() {

  const data = [
    { x: 10, y: 30 },
    { x: 20, y: 50 },
    { x: 30, y: 40 },
    { x: 40, y: 70 },
    { x: 50, y: 60 }
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-greyBlue">

      <h3 className="text-primary font-semibold mb-4">
        Paper Similarity Graph
      </h3>

      <ScatterChart width={350} height={250}>

        <XAxis dataKey="x" />

        <YAxis dataKey="y" />

        <Tooltip />

        <Scatter data={data} fill="#334EAC" />

      </ScatterChart>

    </div>
  );
}

export default ResearchGraph;