const { expect } = require("@wdio/globals")

/**
 * class pour les assertions 
 * 
 */
class Assertions {
    async assertElementTextEquals(element,expectedText){
        await element.waitForDisplayed({timeout:120000})
        const actualText = await element.getText()
        expect(expectedText).toEqual(actualText)
    }
    async assertElementIsDisplayed(element){
        await element.waitForDisplayed({timeout:120000})
        const TextDisplayed = await element.isDisplayed()
        expect(TextDisplayed).toBe(true)
    }

}
module.exports = new Assertions()