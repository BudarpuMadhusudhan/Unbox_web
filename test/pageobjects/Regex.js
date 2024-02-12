const {expect}=require('chai')
const logger=require('../logger')
const dashboardpage = require("../pageobjects/DashboardPage.js")
const systemControl =require("../pageobjects/SystemControl.js")

class Regex{
     get RegexHeaderText()
     {
        return $('//h2')
     }

    get deactiveButton()
    {
        return $("//button[text()='Deactivate']")
       // return $("//button[text()='Deactivate']/../..//td[text()='^BAG\d{8,15}$']")
       // return $("//button[text()='Activate']")
    }

    get ActivationMessage()
    {
        return $("//div[@class='Toastify__toast Toastify__toast--success' or @class='Toastify__toast Toastify__toast--error']/descendant::div[@role='alert']")
       // return $("//div[text()='Success - Regex Updated Successfully']")
    }

    async activeRegex()
    {
       await dashboardpage.systemControl.click()
       await systemControl.updateRegex()
       const expectRegextext=await this.RegexHeaderText.getText()
       expect(expectRegextext).to.be.equals("REGEX")
       logger.log("Regex page is displayed")
       await this.deactiveButton.click()
       const alertActivationMessage=await this.ActivationMessage.getText()
       console.log(alertActivationMessage);
       logger.log(alertActivationMessage)
    }
}
module.exports = new Regex()