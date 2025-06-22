#!/usr/bin/env node
import { execSync } from "child_process";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import chalk from "chalk";

const argv = yargs(hideBin(process.argv))
  .usage("Usage: $0 <file> [--line <number>]")
  .option("line", {
    alias: "l",
    describe: "Line number to inspect",
    type: "number",
  })
  .demandCommand(1)
  .help().argv;

const file = argv._[0];
const line = argv.line;

try {
  let command = `git blame ${file}`;
  if (line) {
    command += ` -L ${line},${line}`;
  }

  const output = execSync(command).toString();

  const match = output.match(/\((.*?)\s+<(.+?)>\s+(\d{4}-\d{2}-\d{2})/);

  if (match) {
    const [, author, email, date] = match;
    console.log(chalk.green("👤 Line last modified by:"));
    console.log(`Author: ${chalk.blue(author.trim())}`);
    console.log(`Email: ${chalk.gray(email.trim())}`);
    console.log(`Date: ${chalk.yellow(date)}`);
  } else {
    console.log(chalk.red("⚠️ No match found — check if the line exists and is committed."));
  }
} catch (error) {
  console.error(chalk.red("❌ Error running git blame:"), error.message);
}
