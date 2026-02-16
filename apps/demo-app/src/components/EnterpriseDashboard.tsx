import { useEffect, useState } from "react";
import { MetricsCard } from "./MetricsCard";

export function EnterpriseDashboard() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/mock-data.json")
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div style={{ padding: "40px", background: "#0f172a" }}>
      <h1 style={{ color: "white" }}>
        Enterprise Impact Dashboard
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "20px",
        marginTop: "20px"
      }}>
        <MetricsCard
          label="Members"
          value={data.members.toLocaleString()}
        />
        <MetricsCard
          label="Digital Users"
          value={data.estimatedDigitalUsers.toLocaleString()}
        />
        <MetricsCard
          label="Hours Saved"
          value={data.estimatedTimeSavedHours.toLocaleString()}
        />
        <MetricsCard
          label="Engineering Savings"
          value={`$${data.estimatedEngineeringSavingsUSD.toLocaleString()}`}
        />
      </div>
    </div>
  );
}

