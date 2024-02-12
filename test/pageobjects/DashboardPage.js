const logger = require("../logger");

class DashboardPage {

    get myTeamLink() {
        return browser.$("//div[@id='team']")
    }
     
    get robot()
    {
        return browser.$("//span[text()='Robots']")
    }


//system control
    get systemControl(){
        browser.waitUntil(()=>$("//span[text()='System Control']").isDisplayed(),{
            timeout:3000,
            timeoutMsg:"Not Loaded"
        })
        return $("//span[text()='System Control']")
    }

    get adminSetting()
    {
        return $("//span[text()='Admin Settings']")
    }
    // get systemControl() {
    //     browser.waitUntil(() => browser.$("//div[@id='system']").isDisplayed(), {
    //         timeout: 3000,
    //         timeoutMsg: "Not loaded"
    //     })
    //     return $("//div[@id='system']")
    // }

    get reports() {
        browser.waitUntil(() => browser.$("//div[@id='reports']"), {
            timeout: 3000,
            timeoutMsg: "Not loaded"
        })
        return browser.$("//div[@id='reports']")
    }

    get pageHeader(){
        return $("//div[@class=' header ']/descendant::div[@class='header-heading']")
    }

    async systemControlOption(option) {
        return $(`//span[@class='side-content' and .='${option}']`)
    }

    async reportsOption(option) {
        return browser.$(`//span[@class='side-content' and .='${option}']/ancestor::a`)
    }

    get logOut()
    {
        return $("//span[text()='Logout']")
    }

    async clickOnRobot()
    {
     await this.systemControl.click()
     logger.log("Clicked on SystemControl module")
     await this.robot.click()
     logger.log("Clicked on robot sub module")
    }


}
module.exports = new DashboardPage()