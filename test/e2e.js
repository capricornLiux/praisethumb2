const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('http://localhost:3000/index/index');
    await driver.findElement(By.id('main')).click();
    // const _animation = driver.findElement(By.id('addOne'));
    const _animation = await driver.findElement(By.id('addOne'));
    await driver.wait(_animation.isDisplayed(), 10000);
  } finally {
    // await driver.quit();
  }
})();