import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Fix for Node.js on Windows where fs.cpSync fails across drive letters or causes silent exits
if (process.platform === 'win32') {
  const safeCpSync = function (src, dest, opts) {
    if (!fs.existsSync(src)) return;
    const st = fs.statSync(src);
    if (st.isDirectory()) {
      fs.mkdirSync(dest, { recursive: true });
      for (const item of fs.readdirSync(src)) {
        safeCpSync(path.join(src, item), path.join(dest, item), opts);
      }
    } else {
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(src, dest);
    }
  };
  fs.cpSync = safeCpSync;
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cliPath = path.resolve(__dirname, '../node_modules/@opennextjs/cloudflare/dist/cli/index.js');
const cli = await import(`file://${cliPath.replace(/\\/g, '/')}`);
cli.runCommand();
