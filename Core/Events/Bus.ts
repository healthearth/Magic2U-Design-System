// Lightweight in-memory event bus.

type Handler = (payload: any) => void | Promise<void>;

const handlers: Record<string, Handler[]> = {};

export function on(event: string, handler: Handler) {
  handlers[event] = handlers[event] || [];
  handlers[event].push(handler);
}

export async function emit(event: string, payload: any) {
  for (const handler of handlers[event] || []) {
    await handler(payload);
  }
}
