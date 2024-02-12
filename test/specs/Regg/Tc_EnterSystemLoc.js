const workLib =require('../../workflowLibrary/workflowLibrary.js')
const dashboardPage= require('../../pageobjects/DashboardPage.js')
const settingPage = require('../../pageobjects/setting.js')
require('dotenv').config()

describe('Verify admin can enter System Location',async()=>{
    it('Send System Location',async ()=>{
        await workLib.loginOperation(process.env.ROOTUSN,process.env.ROOTPWD)
        await dashboardPage.adminSetting.click()
        Logger.log("Clicked on admin setting")
        await settingPage.systemLocationtextFiled.setValue("Mumbai")
        Logger.log('Entered the value')
        await settingPage.submitButton.click()
        Logger.log('Clicked on subit button')
    })
})