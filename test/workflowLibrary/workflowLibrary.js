require('dotenv')
const welcomepage = require('../pageobjects/WelcomePage')
const dashboardpage = require('../pageobjects/DashboardPage')
const myteampage = require('../pageobjects/MyTeamPage')
const logger = require('../logger')

class workflowLibrary {
    randomnumber = Math.ceil(Math.random() * 1000)

    async loginOperation(Username, Password) {
        await welcomepage.userIDTextField.setValue(Username)
        const useridtext = await welcomepage.userIDTextField.getValue()
        await welcomepage.userPasswordTextField.setValue(Password)
        const passwordtext = await welcomepage.userPasswordTextField.getValue()
        expect(useridtext, "User Name doesnt match").to.equal(Username)
        Logger.log(`User name Entered was ${Username}`)
        expect(passwordtext, "User Password doesnt match").to.equal(Password)
        Logger.log(`User password Entered was ${Password}`)
        await browser.waitUntil(() => welcomepage.loginButton.isClickable(), {
            timeout: 3000,
            timeoutMsg: "Login Button Not Clickable"
        })
        await welcomepage.loginButton.doubleClick()
        // const message = await welcomepage.alertText.getText()
        // Logger.log(message)
        // await browser.waitUntil(async () => await dashboardpage.pageHeader.isDisplayed(), {
        //     timeout: 3000,
        //     timeoutMsg: "Credentials are not valid Dashboard is not displayed"
       // })
        // await expect(message, "Alert message does not match").to.equal("Login Successful")
        // await welcomepage.closeMessage.waitForClickable()
        // await welcomepage.closeMessage.click()
        // const pageName = await dashboardpage.pageHeader.getText()
        // await expect(pageName, "Invalid Page").to.equal("DASHBOARD")
        // Logger.log(`DASHBOARD is displayed`)
    }

    // async successMessageValidation(Successmessage) {
    //   await browser.waitUntil(async ()=> welcomepage.alertText.isDisplayed(),{
    //         timeout:6000,
    //         timeoutMsg:"Alert Message not displayed"
    //     })
    //     const successfulMessage = await welcomepage.alertText.getText()
    //     Logger.log(successfulMessage)
    //     await expect(successfulMessage, "Alert message does not match").to.equal(Successmessage)
    //     await welcomepage.closeMessage.waitForClickable()
    //     await welcomepage.closeMessage.click()
    // }

    async createUser(TestUsername, TestPassword, Securitykey) {
        browser.waitUntil(() => dashboardpage.myTeamLink.isClickable(), {
            timeout: 5000,
            timeoutMsg: "Not loaded"
        })
        await dashboardpage.myTeamLink.click()
        const textHeader = await myteampage.myTeamHeaderText.getText()
        await expect(textHeader, "Error dislaying My Team").to.equal("MY TEAM")
        Logger.log("My Team is Displayed")
        await browser.waitUntil(() => myteampage.heading.isDisplayed(), {
            timeout: 5000,
            timeoutMsg: "Dashboard Users not displayed"
        })
        const dashboardUserText = await myteampage.heading.getText()
        await expect(dashboardUserText, "Dashboard Users Not Displayed").to.equal("Dashboard Users")
        Logger.log("Dashboard Users is displayed")
        await browser.waitUntil(() => myteampage.addUserButton.isClickable(), {
            timeout: 5000,
            timeoutMsg: "Add Users Button not clickable"
        })
        await myteampage.addUserButton.click()
        await browser.waitUntil(() => myteampage.userNameTextfield.isDisplayed(), {
            timeout: 2000,
            timeoutMsg: "Username textfield not displayed"
        })
        await myteampage.userNameTextfield.setValue(TestUsername + this.randomnumber)
        const newusername = await myteampage.userNameTextfield.getValue()
        await browser.waitUntil(() => myteampage.userNameTextfield.isDisplayed(), {
            timeout: 2000,
            timeoutMsg: "Userpassword textfield not displayed"
        })
        await myteampage.userPasswordTextfield.setValue(TestPassword)
        const newuserpass = await myteampage.userPasswordTextfield.getValue()
        await myteampage.isaAdminCheckbox.click()
        await browser.waitUntil(() => myteampage.isaAdminCheckbox.isSelected(), {
            timeout: 3000,
            timeoutMsg: "Is Admin checkbox is not checked"
        })
        await browser.waitUntil(() => myteampage.securityKeyTextField.isDisplayed(), {
            timeout: 2000,
            timeoutMsg: "Securitykey textfield not displayed"
        })
        await myteampage.securityKeyTextField.setValue(Securitykey)
        const securityKey = await myteampage.securityKeyTextField.getValue()
        await expect(newusername, "Test User Name doesnt match").to.equal(TestUsername + this.randomnumber)
        await expect(newuserpass, "Test User password doesnt match").to.equal(TestPassword)
        // await expect(securityKey, "Security key doesnt match").to.equal(Securitykey)
        await browser.waitUntil(() => myteampage.confirmButton.isClickable(), {
            timeout: 5000,
            timeoutMsg: "Confirm button Not clickable"
        })
        await myteampage.confirmButton.click()
        Logger.log(`Credentials used for creating Dashboard user USN=${TestUsername + this.randomnumber},PWD=${TestPassword}`)
        browser.waitUntil(() => welcomepage.alertText.isDisplayed(), {
            timeout: 2000,
            timeoutMsg: "Alert Message not displayed"
        })
        const message = await welcomepage.alertText.getText()
        Logger.log(message)
        await expect(message, "User Creation Failed").to.equal("User Created Successfully")
        await welcomepage.closeMessage.waitForClickable()
        await welcomepage.closeMessage.click()
    }

    async modifyUser(TestUsername, TestModifyPassword) {
        await (await myteampage.editUser(TestUsername + this.randomnumber)).scrollIntoView()
        await (await myteampage.editUser(TestUsername + this.randomnumber)).click()
        await myteampage.userPasswordTextfield.setValue(TestModifyPassword + this.randomnumber)
        const modifiedPass = await myteampage.userPasswordTextfield.getValue()
        await expect(modifiedPass, "Password not modified").to.equal(TestModifyPassword + this.randomnumber)
        await myteampage.confirmButton.click()
        Logger.log(`Modified Password is ${TestModifyPassword + this.randomnumber}`)
        browser.waitUntil(() => welcomepage.alertText.isDisplayed(), {
            timeout: 2000,
            timeoutMsg: "Alert Message not displayed"
        })
        const message = await welcomepage.alertText.getText()
        Logger.log(message)
        await expect(message, "User Modification Failed").to.equal("User Updated Successfully")
        await welcomepage.closeMessage.waitForClickable()
        await welcomepage.closeMessage.click()
    }

    async deleteUser(TestUsername) {
        await (await myteampage.deleteUser(TestUsername + this.randomnumber)).scrollIntoView()
        await (await myteampage.deleteUser(TestUsername + this.randomnumber)).click()
        Logger.log(`Deleted user is ${TestUsername + this.randomnumber}`)
        browser.waitUntil(() => welcomepage.alertText.isDisplayed(), {
            timeout: 2000,
            timeoutMsg: "Alert Message not displayed"
        })
        const message = await welcomepage.alertText.getText()
        Logger.log(message)
        await expect(message, "User Deletion Failed").to.equal("Success - User successfully deleted")
        await welcomepage.closeMessage.waitForClickable()
        await welcomepage.closeMessage.click()
    }

    async #verifySystemControlOption(option) {
        const optionName = await (await dashboardpage.systemControlOption(option)).getText()
        await expect(optionName, "Options doesnt match").to.equal(optionName)
        Logger.log(`${option} option is present`)
    }

    async verifyAllSystemControloptions(SORTMAP, REGEX, ROBOTS, FEEDER, BIN, BAG, PRINTER) {
        await browser.waitUntil(() => dashboardpage.pageHeader.isDisplayed(), {
            timeout: 6000,
            timeoutMsg: "Page Name not displayed"
        })
        const pageName = await dashboardpage.pageHeader.getText()
        await expect(pageName, "Invalid Page").to.equal("SYSTEM CONTROL")
        Logger.log(`SYSTEM CONTROL is displayed`)
        await this.#verifySystemControlOption(SORTMAP)
        await this.#verifySystemControlOption(REGEX)
        await this.#verifySystemControlOption(ROBOTS)
        await this.#verifySystemControlOption(FEEDER)
        await this.#verifySystemControlOption(BIN)
        await this.#verifySystemControlOption(BAG)
        await this.#verifySystemControlOption(PRINTER)
    }

    async #verifyReportOption(option) {
        const optionName = await (await dashboardpage.reportsOption(option)).getText()
        await expect(optionName, "Options doesnt match").to.equal(optionName)
        Logger.log(`${option} option is present`)
    }

    async verifyAllReportsoptions(SHIPMENTDETAILS, REJECTION, BAGS_CLOSED, DATA_PUSH_LOGS_PARCELS,
        DATA_PUSH_LOGS_BAG_SEAL, BIN_WISE_SHIPMENT_VOLUME,
        ERROR_LOGS, ERROR_LOGS_SUMMARY) {
        await browser.waitUntil(() => dashboardpage.pageHeader.isDisplayed(), {
            timeout: 6000,
            timeoutMsg: "Page Name not displayed"
        })
        const pageName = await dashboardpage.pageHeader.getText()
        await expect(pageName, "Invalid Page").to.equal("SHIPMENT DETAILS")
        Logger.log(`SHIPMENT DETAILS is displayed`)
        await this.#verifyReportOption(SHIPMENTDETAILS)
        await this.#verifyReportOption(REJECTION)
        await this.#verifyReportOption(BAGS_CLOSED)
        await this.#verifyReportOption(DATA_PUSH_LOGS_PARCELS)
        await this.#verifyReportOption(DATA_PUSH_LOGS_BAG_SEAL)
        await this.#verifyReportOption(BIN_WISE_SHIPMENT_VOLUME)
        await this.#verifyReportOption(ERROR_LOGS)
        await this.#verifyReportOption(ERROR_LOGS_SUMMARY)
    }

    async logout() {
        browser.waitUntil(() => browser.$("//div[@id='logout']").isDisplayed(), {
            timeout: 30000,
            timeoutMsg: "Logout not displayed",
        })
        await $("//div[@id='logout']").click()
        Logger.log("Succesfully logged out of the Application")
    }

    async launchApplication() {
        await browser.maximizeWindow()
        await browser.url(process.env.APP_URL)
        const title = await browser.getTitle()
        expect(title).to.equal("UNBOX DASHBOARD")
    }

    async lauchApplicationV3()
    {
        await browser.maximizeWindow()
        await browser.url(process.env.APP_URL)
        const title=await browser.getTitle()
        expect(title).to.equal("UBR Dashboard")
    }

    async createBundleUser(TestUsername, TestPassword) {
        browser.waitUntil(() => dashboardpage.myTeamLink.isClickable(), {
            timeout: 5000,
            timeoutMsg: "Not loaded"
        })
        await dashboardpage.myTeamLink.click()
        const textHeader = await myteampage.myTeamHeaderText.getText()
        await expect(textHeader, "Error dislaying My Team").to.equal("MY TEAM")
        Logger.log("My Team is Displayed")
        await browser.waitUntil(() => myteampage.bundlButton.isClickable(), {
            timeout: 5000,
            timeoutMsg: "Bundle Button Not clickable"
        })
        await myteampage.bundlButton.click()
        await browser.waitUntil(() => myteampage.heading.isDisplayed(), {
            timeout: 5000,
            timeoutMsg: "Bundle Users not displayed"
        })
        const bundleUserText = await myteampage.heading.getText()
        await expect(bundleUserText, "Bundle Users Not Displayed").to.equal("BUNDL Users")
        Logger.log("BUNDLE Users is displayed")
        await browser.waitUntil(() => myteampage.addUserButton.isClickable(), {
            timeout: 5000,
            timeoutMsg: "Add Users Button not clickable"
        })
        await myteampage.addUserButton.click()
        await myteampage.userNameTextfield.setValue(TestUsername + this.randomnumber)
        const newusername = await myteampage.userNameTextfield.getValue()
        await myteampage.userPasswordTextfield.setValue(TestPassword)
        const newuserpass = await myteampage.userPasswordTextfield.getValue()
        await expect(newusername, "Test User Name doesnt match").to.equal(TestUsername + this.randomnumber)
        await expect(newuserpass, "Test User password doesnt match").to.equal(TestPassword)
        await browser.waitUntil(() => myteampage.confirmButton.isClickable(), {
            timeout: 5000,
            timeoutMsg: "Confirm button Not clickable"
        })
        await myteampage.confirmButton.click()
        Logger.log(`Credentials used for creating Bundle user USN=${TestUsername + this.randomnumber},PWD=${TestPassword}`)
        browser.waitUntil(()=>welcomepage.alertText.isDisplayed(),{
            timeout:2000,
            timeoutMsg:"Alert Message not displayed"
        })
        const message = await welcomepage.alertText.getText()
        Logger.log(message)
        await expect(message, "Bundle User Creation Failed").to.equal("User Created Successfully")
        await welcomepage.closeMessage.waitForClickable()
        await welcomepage.closeMessage.click()
    }

    async modifyBundleUser(TestUsername, TestModifyPassword) {
        await (await myteampage.editUser(TestUsername + this.randomnumber)).scrollIntoView()
        await (await myteampage.editUser(TestUsername + this.randomnumber)).click()
        await myteampage.userPasswordTextfield.setValue(TestModifyPassword + this.randomnumber)
        const modifiedPass = await myteampage.userPasswordTextfield.getValue()
        await expect(modifiedPass, "Password not modified").to.equal(TestModifyPassword + this.randomnumber)
        await myteampage.confirmButton.click()
        Logger.log(`Modified Password is ${TestModifyPassword + this.randomnumber}`)
    }

    async deleteBundleUser(TestUsername) {
        await (await myteampage.deleteUser(TestUsername + this.randomnumber)).scrollIntoView()
        await (await myteampage.deleteUser(TestUsername + this.randomnumber)).click()
        Logger.log(`Deleted user is ${TestUsername + this.randomnumber}`)
    }

    async createFeederUser(TestUsername, TestPassword) {
        browser.waitUntil(() => dashboardpage.myTeamLink.isClickable(), {
            timeout: 5000,
            timeoutMsg: "Not loaded"
        })
        await dashboardpage.myTeamLink.click()
        const textHeader = await myteampage.myTeamHeaderText.getText()
        await expect(textHeader, "Error dislaying My Team").to.equal("MY TEAM")
        Logger.log("My Team is Displayed")
        await browser.waitUntil(() => myteampage.feederButton.isClickable(), {
            timeout: 5000,
            timeoutMsg: "Feeder Button Not clickable"
        })
        await myteampage.bundlButton.click()
        await browser.waitUntil(() => myteampage.heading.isDisplayed(), {
            timeout: 5000,
            timeoutMsg: "Feeder Users not displayed"
        })
        const feederUserText = await myteampage.heading.getText()
        await expect(feederUserText, "Feeder Users Not Displayed").to.equal("BUNDL Users")
        Logger.log("Feeder Users is displayed")
        await browser.waitUntil(() => myteampage.addUserButton.isClickable(), {
            timeout: 5000,
            timeoutMsg: "Add Users Button not clickable"
        })
        await myteampage.addUserButton.click()
        await myteampage.userNameTextfield.setValue(TestUsername + this.randomnumber)
        const newusername = await myteampage.userNameTextfield.getValue()
        await myteampage.userPasswordTextfield.setValue(TestPassword)
        const newuserpass = await myteampage.userPasswordTextfield.getValue()
        await expect(newusername, "Test User Name doesnt match").to.equal(TestUsername + this.randomnumber)
        await expect(newuserpass, "Test User password doesnt match").to.equal(TestPassword)
        await browser.waitUntil(() => myteampage.confirmButton.isClickable(), {
            timeout: 5000,
            timeoutMsg: "Confirm button Not clickable"
        })
        await myteampage.confirmButton.click()
        Logger.log(`Credentials used for creating Feeder user USN=${TestUsername + this.randomnumber},PWD=${TestPassword}`)
        browser.waitUntil(()=>welcomepage.alertText.isDisplayed(),{
            timeout:2000,
            timeoutMsg:"Alert Message not displayed"
        })
        const message = await welcomepage.alertText.getText()
        Logger.log(message)
        await expect(message, "Feeder User Creation Failed").to.equal("User Created Successfully")
        await welcomepage.closeMessage.waitForClickable()
        await welcomepage.closeMessage.click()
    }

    async modifyFeederUser(TestUsername, TestModifyPassword) {
        await (await myteampage.editUser(TestUsername + this.randomnumber)).scrollIntoView()
        await (await myteampage.editUser(TestUsername + this.randomnumber)).click()
        await myteampage.userPasswordTextfield.setValue(TestModifyPassword + this.randomnumber)
        const modifiedPass = await myteampage.userPasswordTextfield.getValue()
        await expect(modifiedPass, "Password not modified").to.equal(TestModifyPassword + this.randomnumber)
        await myteampage.confirmButton.click()
        Logger.log(`Modified Feeder Password is ${TestModifyPassword + this.randomnumber}`)
    }

    async deleteFeederUser(TestUsername) {
        await (await myteampage.deleteUser(TestUsername + this.randomnumber)).scrollIntoView()
        await (await myteampage.deleteUser(TestUsername + this.randomnumber)).click()
        Logger.log(`Deleted Feeder user is ${TestUsername + this.randomnumber}`)
    }


    async componentsInTheLoginPage(){
        const un=await welcomepage.userIDTextField.isDisplayed()
        const pwd= await welcomepage.userPasswordTextField.isDisplayed()
        const btn=await welcomepage.loginButton.isDisplayed()
        expect(un ,"Components are not visible").to.be.equal(true)
        expect(pwd ,"Components are not visible").to.be.equal(true)
        expect(btn ,"Components are not visible").to.be.equal(true)
        logger.log(`Components in the Login page are displayed`)
    }
}
module.exports = new workflowLibrary()
