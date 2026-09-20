#!/usr/bin/env node
// Renders public/KirillPetunin-frontend-CV-<locale>.pdf from the built site,
// using the page's own print stylesheet (A4, no margins, controls hidden).
//
// The downloadable copy used to be made by hand, so it drifted: the file in
// public/ still ended at November 2024 while the page already listed the role
// started in May 2026. Printing the built site keeps the two in step — run
// this after `npm run build`, in the same breath as `cv:snapshot`.
//
// Serves out/ itself so nothing else has to be running, and drives headless
// Chrome, which is the only renderer here that honours @page and print:.

import { spawn } from "node:child_process";
import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const OUT_DIR = join(ROOT, "out");
const LOCALES = ["en", "ru"];
const CHROME =
	process.env.CHROME_BIN ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const MIME = {
	".css": "text/css",
	".html": "text/html; charset=utf-8",
	".ico": "image/x-icon",
	".jpeg": "image/jpeg",
	".jpg": "image/jpeg",
	".js": "text/javascript",
	".json": "application/json",
	".png": "image/png",
	".svg": "image/svg+xml",
	".txt": "text/plain",
	".woff2": "font/woff2",
	".xml": "application/xml",
};

if (!existsSync(OUT_DIR)) {
	console.error('out/ not found — run `npm run build` first (output: "export").');
	process.exit(1);
}

if (!existsSync(CHROME)) {
	console.error(`Chrome not found at ${CHROME}. Set CHROME_BIN to override.`);
	process.exit(1);
}

/** Static export writes /en as en.html; also accept directory-style index.html. */
const resolveFile = (urlPath) => {
	const clean = decodeURIComponent(urlPath.split("?")[0]);

	return [
		join(OUT_DIR, clean),
		join(OUT_DIR, `${clean}.html`),
		join(OUT_DIR, clean, "index.html"),
	].find((candidate) => existsSync(candidate) && statSync(candidate).isFile());
};

const server = createServer((req, res) => {
	const file = resolveFile(req.url ?? "/");

	if (!file) {
		res.writeHead(404).end("not found");

		return;
	}

	res.writeHead(200, { "content-type": MIME[extname(file)] ?? "application/octet-stream" });
	createReadStream(file).pipe(res);
});

await new Promise((done) => server.listen(0, "127.0.0.1", done));

const { port } = server.address();

const print = (locale) =>
	new Promise((done, fail) => {
		const target = join(ROOT, "public", `KirillPetunin-frontend-CV-${locale}.pdf`);

		const chrome = spawn(CHROME, [
			"--headless=new",
			"--disable-gpu",
			// Let hydration, fonts and the photo settle before the page is captured.
			"--virtual-time-budget=20000",
			"--run-all-compositor-stages-before-draw",
			"--no-pdf-header-footer",
			`--print-to-pdf=${target}`,
			`http://127.0.0.1:${port}/${locale}`,
		]);

		chrome.on("error", fail);
		chrome.on("exit", (code) =>
			code === 0 ? done(target) : fail(new Error(`Chrome exited with ${code} for ${locale}`))
		);
	});

try {
	for (const locale of LOCALES) {
		const file = await print(locale);
		const { size } = statSync(file);

		console.log(`  ${locale}: ${(size / 1024).toFixed(0)} KB → ${file.replace(`${ROOT}/`, "")}`);
	}
} finally {
	server.close();
}
