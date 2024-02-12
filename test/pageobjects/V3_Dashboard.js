class V3Dashboard
{
     get dashboardTab()
     {
        return $("//div[text()='Dashboard']")
     }

    get binAvailable()
    {
        browser.waitUntil(async ()=> await browser.$("//h6[text()='Bins Available']/parent::div/h5"),{
           timeout :  5000,
           timeoutMsg : "Your count is not displayed"
        })
        return $("//h6[text()='Bins Available']/parent::div/h5")
    }

    async getBinCount()
    {
        // await this.dashboardTab.click()
        // await this.binAvailable.scrollIntoView()
        // let num=await this.binAvailable.getText()
        await browser.$("//h6[text()='Bins Available']/parent::div/h5").waitForDisplayed(5000)
        if((await browser.$("//h6[text()='Bins Available']/parent::div/h5").getText())==''){
            await browser.pause(6000)
        }
       var count= await browser.$("//h6[text()='Bins Available']/parent::div/h5").getText()
        // let count =await parseInt(num)
        return count
    }

}
module.exports = new V3Dashboard()