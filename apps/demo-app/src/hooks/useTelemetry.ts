import { logEvent } from "../telemetry/telemetry";

export function useTelemetry() {
  function track(event: string, payload?: any) {
    logEvent(event, payload);
  }

  return { track };
}
