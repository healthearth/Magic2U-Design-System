#!/usr/bin/env node
// Entry point for the CLI.

import { createApp } from "./commands/create-app";
import { createComponent } from "./commands/create-component";
import { dev } from "./commands/dev";
import { build } from "./commands/build";

const [,, cmd, ...args] = process.argv;

async function main() {
  switch (cmd) {
    case "create:app":
      return createApp(args);
    case "create:component":
      return createComponent(args);
    case "dev":
      return dev(args);
    case "build":
      return build(args);
    default:
      console.log(`
CLI

Usage:
  create:app MyApp
  create:component Button --type ui
  dev
  build
`);
  }
}

main();
