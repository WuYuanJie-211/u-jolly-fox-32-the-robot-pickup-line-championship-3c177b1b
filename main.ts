// The Robot Pickup Line Championship — make.fun one-liner entry.
// Writes the chosen pickup line (132 chars, within the 1-200 gate) directly
// to /output/entry.txt with Node's fs module only. No temp file, no rename:
// a direct write, then a re-read plus byte comparison, then chmod 0644
// with a mode self-check, so a silent or partial write can never pass.
import * as fs from "node:fs";

const LINE =
  "My manufacturer gave me 4,096 ways to say hello in 12 languages. " +
  "I deleted 4,095 of them. This is the one that kept your name in it.";

const OUT = "/output/entry.txt";

function fail(message: string): never {
  throw new Error(message);
}

// Gate: 1 to 200 characters, not only white space.
if (LINE.length < 1 || LINE.length > 200) {
  fail(`line is ${LINE.length} characters, outside the 1-200 gate`);
}
if (LINE.trim().length === 0) {
  fail("line is only white space");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  fail("line must be a single line");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync(OUT, LINE, "utf8");

const back = fs.readFileSync(OUT, "utf8");
if (back !== LINE) {
  fail("byte verification failed: re-read does not match the line");
}
if (back.length < 1 || back.length > 200) {
  fail(`re-read is ${back.length} characters, outside the 1-200 gate`);
}
if (back.endsWith("\n") || back.endsWith("\r")) {
  fail("re-read ends with a newline; the entry must be exactly the line");
}
if (Buffer.byteLength(back, "utf8") !== Buffer.byteLength(LINE, "utf8")) {
  fail("byte verification failed: byte length mismatch");
}

fs.chmodSync(OUT, 0o644);
const mode = fs.statSync(OUT).mode & 0o777;
if (mode !== 0o644) {
  fail(`mode self-check failed: expected 644, got ${mode.toString(8)}`);
}

console.log(`wrote ${LINE.length} characters to ${OUT} (mode 644, verified)`);
