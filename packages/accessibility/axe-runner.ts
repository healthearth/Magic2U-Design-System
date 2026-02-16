import axe from "axe-core";

export async function runAxeAudit(element: HTMLElement) {
  return await axe.run(element);
}

