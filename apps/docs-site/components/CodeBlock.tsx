export function CodeBlock({ code }: { code: string }) {
  return (
    <pre style={{
      background: "#0f172a",
      padding: 20,
      borderRadius: 8,
      color: "#38bdf8"
    }}>
      {code}
    </pre>
  );
}

