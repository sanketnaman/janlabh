import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const wranglerBin = path.join(projectRoot, 'node_modules/wrangler/bin/wrangler.js');

process.env.OPEN_NEXT_DEPLOY = 'true';

const result = spawnSync(process.execPath, [wranglerBin, 'deploy'], {
  stdio: 'inherit',
  cwd: projectRoot,
  env: process.env,
});

process.exit(result.status ?? 0);
