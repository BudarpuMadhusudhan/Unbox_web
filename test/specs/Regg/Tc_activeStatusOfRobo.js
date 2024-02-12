const workFLowLib=require('../../workflowLibrary/workflowLibrary.js')
require('dotenv').config()
const dashboardPage=require('../../pageobjects/DashboardPage.js')

describe('Verify the active status of Robo',async ()=>{
    it('Active status of robo',async()=>{
        await workFLowLib.loginOperation(process.env.ROOTUSN,process.env.ROOTPWD)
        await dashboardPage.clickOnRobot()
    })
})