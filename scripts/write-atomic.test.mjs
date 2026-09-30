import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { handOver, parseWriteAtomicArgs, stagingError } from "./write-atomic.mjs";

const SCRIPT = join(dirname(fileURLToPath(import.meta.url)), "write-atomic.mjs");

function makeWorkspace() {
  const root = mkdtempSync(join(tmpdir(), "write-atomic-"));
  mkdirSync(join(root, "public"), { recursive: true });
  mkdirSync(join(root, ".cache"), { recursive: true });
  return root;
}

test("parseWriteAtomicArgs needs exactly a staged file and a target", () => {
  assert.deepEqual(parseWriteAtomicArgs([".cache/og.tmp", "public/og.jpg"]), {
    staged: ".cache/og.tmp",
    target: "public/og.jpg",
  });
  assert.match(parseWriteAtomicArgs([]).error, /usage:/);
  assert.match(parseWriteAtomicArgs([".cache/og.tmp"]).error, /usage:/);
  assert.match(parseWriteAtomicArgs(["a", "b", "c"]).error, /unexpected argument: c/);
});

test("stagingError accepts files staged outside public", () => {
  const publicDir = "/workspace/public";
  assert.equal(
    stagingError({
      staged: "/workspace/.cache/og.jpg.tmp",
      target: "/workspace/public/og.jpg",
      publicDir,
    }),
    null,
  );
});

test("stagingError rejects files staged inside public (they serve half-baked)", () => {
  const publicDir = "/workspace/public";
  assert.match(
    stagingError({
      staged: "/workspace/public/og.jpg.tmp",
      target: "/workspace/public/og.jpg",
      publicDir,
    }),
    /stage outside/,
  );
});

test("replaces the target in one atomic step without removing or modifying it first", () => {
  const root = makeWorkspace();
  const staged = join(root, ".cache/og.jpg.tmp");
  const target = join(root, "public/og.jpg");
  writeFileSync(target, "old card");
  writeFileSync(staged, "new card");

  handOver(staged, target);

  assert.equal(readFileSync(target, "utf8"), "new card");
  assert.equal(existsSync(staged), false);
});

test("creates parent directory when missing", () => {
  const root = makeWorkspace();
  const staged = join(root, ".cache/site.json.tmp");
  writeFileSync(staged, '{"title":"Sky Strike"}');

  handOver(staged, join(root, "src/lib/og/site.json"));

  assert.equal(readFileSync(join(root, "src/lib/og/site.json"), "utf8"), '{"title":"Sky Strike"}');
  assert.equal(existsSync(staged), false);
});

test("refuses to touch target when staged file is missing", () => {
  const root = makeWorkspace();
  const target = join(root, "public/og.jpg");
  writeFileSync(target, "old card");
  writeFileSync(join(root, ".cache/og.jpg.tmp"), "half a JPEG");

  assert.equal(readFileSync(target, "utf8"), "old card");
  assert.throws(() => handOver(join(root, ".cache/absent.tmp"), target), { code: "ENOENT" });
  assert.equal(readFileSync(target, "utf8"), "old card");
});

test("fails cleanly on cross-device rename refusal", () => {
  const root = makeWorkspace();
  const staged = join(root, ".cache/og.jpg.tmp");
  const target = join(root, "public/og.jpg");
  writeFileSync(staged, "new card");
  writeFileSync(target, "old card");

  const crossDevice = () => {
    const err = new Error("EXDEV: cross-device link not permitted");
    err.code = "EXDEV";
    throw err;
  };

  assert.throws(() => handOver(staged, target, { rename: crossDevice }), {
    message: /stage under \/workspace\/\.cache\//,
  });
});

test("cli runs hand-over end-to-end", () => {
  const root = makeWorkspace();
  writeFileSync(join(root, ".cache/og.jpg.tmp"), "new card");
  const ok = spawnSync(
    process.execPath,
    [SCRIPT, join(root, ".cache/og.jpg.tmp"), join(root, "public/og.jpg")],
    { encoding: "utf8" },
  );
  assert.equal(ok.status, 0, ok.stdout + ok.stderr);
  assert.equal(readFileSync(join(root, "public/og.jpg"), "utf8"), "new card");
});

test("accepts standard og.jpg, banner and site.json hand-over paths", () => {
  const standardPaths = [
    "node scripts/write-atomic.mjs /tmp/og.jpg public/og.jpg",
    "node scripts/write-atomic.mjs /tmp/site.json public/site.json",
  ];
  for (const line of standardPaths) {
    const argv = line.replace("node scripts/write-atomic.mjs", "").trim().split(/\s+/);
    const args = parseWriteAtomicArgs(argv);
    assert.equal(args.error, undefined, line);
  }
});
