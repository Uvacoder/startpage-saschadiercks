import { test, expect } from "@playwright/test";

test("Render", async ({ page }) => {
  // Go to http://localhost:8080/
  await page.goto("http://localhost:8080/");

  // take a screenshot
  expect(await page.screenshot()).toMatchSnapshot("render.png", {
    threshold: 0.3
  });
});
