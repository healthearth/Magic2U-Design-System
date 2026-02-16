type Props = {
  label: string;
  value: string;
};

export function MetricsCard({ label, value }: Props) {
  return (
    <div style={{
      padding: "24px",
      background: "#1e293b",
      borderRadius: "12px",
      color: "white"
    }}>
      <p style={{ opacity: 0.6 }}>{label}</p>
      <h2>{value}</h2>
    </div>
  );
}

