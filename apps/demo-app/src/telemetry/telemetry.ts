export function logEvent(event: string, payload?: any) {
  console.log("[Telemetry]", event, payload);

  fetch("/telemetry-endpoint", {
    method: "POST",
    body: JSON.stringify({ event, payload }),
    headers: {
      "Content-Type": "application/json"
    }
  }).catch(() => {});
}

