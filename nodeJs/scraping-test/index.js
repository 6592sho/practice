const puppeteer = require("puppeteer");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const createScreenshot = async (page, url) => {
  await page.goto(url);
  await page.screenshot({ path: "./photo/test2.png" });
  console.log("screenshot was created");
};

const createPdf = async (page, url) => {
  await page.goto(url);
  await page.pdf({ path: "./pdf/test.pdf", format: "A4" });
  console.log("pdf was created");
};

!(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  rl.question("Which page is you want to create pdf ? ", async (url) => {
    try {
      await createPdf(page, url);
    } catch (e) {
      console.error(e);
    } finally {
      browser.close();
    }
    rl.close();
  });
})();

// const browser = await puppeteer.launch(); // 起動
// const page = await browser.newPage(); // 新しいページを開く
// await page.goto(url); // ページへ移動
// await page.evaluate(() => document.querySelector(".newsList").children[0].firstChild.textContent.trim());
// browser.close();
// 任意のJavaScriptを実行
// await page.evaluate(() => {
//   // const text = document.querySelector(".table1_areaDate");
//   // console.log(text);
// });
