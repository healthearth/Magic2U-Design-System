type Props = {
  label: string;
  value: string;
};

export function StatCard({ label, value }: Props) {
  return (
    <div style={{
      background: "#1e293b",
      padding: 24,
      borderRadius: 12,
      color: "white"
    }}>
      <p style={{ opacity: 0.6 }}>{label}</p>
      <h2>{value}</h2>
    </div>
  );
}


