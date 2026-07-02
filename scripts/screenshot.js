const { chromium } = require("playwright");
const path = require("path");

const target = process.argv[2];
if (!target) {
  console.error("Usage: node scripts/screenshot.js <output-basename>");
  process.exit(1);
}

const url = "file://" + path.resolve(__dirname, "..", "index.html");
const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 375, height: 812 },
];

(async () => {
  const browser = await chromium.launch();
  for (const vp of viewports) {
    const page = await browser.newPage({
      viewport: { width: vp.width, height: vp.height },
    });
    await page.goto(url);
    await page.waitForTimeout(500);
    const out = path.resolve(
      __dirname,
      "..",
      "screenshots",
      `${target}-${vp.name}.png`
    );
    await page.screenshot({ path: out });
    console.log("saved", out);
    await page.close();
  }
  await browser.close();
})();
