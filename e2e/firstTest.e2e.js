import { device, element, by, expect } from "detox";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show Tab Two screen after tap', async () => {
    await element(by.id('TabTwo')).tap();
    await expect(element(by.text('/screens/TabTwoScreen.tsx'))).toBeVisible();
  });
});
