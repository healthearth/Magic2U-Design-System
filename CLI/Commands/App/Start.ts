// Scaffolds a new app using the platform.

import fs from "fs";
import path from "path";

export async function createApp(args: string[]) {
  const name = args[0];
  if (!name) {
    console.error("Please provide an app name.");
    return;
  }

  const dir = path.join(process.cwd(), name);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  // Minimal starter app.
  fs.writeFileSync(
    path.join(dir, "index.ts"),
    `// ${name} - created with cre8\nconsole.log("Hello from ${name}");\n`
  );

  console.log(`Created app at ./${name}`);
}
