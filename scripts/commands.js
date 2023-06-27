import { execSync } from "child_process";
import { join } from "path";

const [path, command] = findPathAndCommand(process.argv[2]);

if (!path || !command) {
  console.error(`Invalid command: ${process.argv[2]}`);
  process.exit(1);
}

try {
  execSync(command, { cwd: join(process.cwd(), ...path), stdio: "inherit" });
} catch (error) {
  console.error(`An error occurred while running ${command} in ${path}.`);
  console.error(error.message);
  process.exit(1);
}

function findPathAndCommand(str) {
  // prettier-ignore
  switch (str) {
    case "build":   return [["apps", "webapp"], "pnpm build"];
    case "start":   return [["apps", "webapp"], "pnpm start"];
    case "install": return [["apps", "webapp"], "pnpm i"];
    case "dev":     return [["apps", "webapp"], "pnpm dev"];
    default:        return [null, null];
  }
}
