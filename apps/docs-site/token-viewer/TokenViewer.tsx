const tokens = {
  primary: "#2563eb",
  background: "#0f172a",
  radius: "12px",
  spacing: "16px"
};

export function TokenViewer() {
  return (
    <div>
      <h2>Design Tokens</h2>
      {Object.entries(tokens).map(([key, value]) => (
        <div key={key}>
          <strong>{key}</strong>: {value}
        </div>
      ))}
    </div>
  );
}

