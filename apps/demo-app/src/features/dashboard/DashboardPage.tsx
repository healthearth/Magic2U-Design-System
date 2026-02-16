import { MetricsPanel } from "./MetricsPanel";
import { CompanyOverview } from "./CompanyOverview";

export function DashboardPage() {
  return (
    <div style={{ padding: "40px" }}>
      <CompanyOverview />
      <MetricsPanel />
    </div>
  );
}

