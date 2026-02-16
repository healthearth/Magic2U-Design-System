import { useMetrics } from "../../hooks/useMetrics";
import { StatCard } from "../../components/StatCard";

export function MetricsPanel() {
  const { data } = useMetrics();

  if (!data) return <p>Loading metrics...</p>;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
      <StatCard label="Members" value={data.members.toLocaleString()} />
      <StatCard label="Digital Users" value={data.digitalUsers.toLocaleString()} />
      <StatCard label="Hours Saved" value={data.hoursSaved.toLocaleString()} />
      <StatCard label="Engineering Savings" value={`$${data.savings.toLocaleString()}`} />
    </div>
  );
}

