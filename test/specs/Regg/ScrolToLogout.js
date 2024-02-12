
const workflowLibrary =require('../../workflowLibrary/workflowLibrary.js')
const dashboardPage =require('../../pageobjects/DashboardPage.js')
const logger = require('../../logger.js')

describe('Scroll to Logout ',async()=>{
    it('scroll',async()=>{
        await workflowLibrary.loginOperation(process.env.ROOTUSN,process.env.ROOTPWD)
      const aa=await  dashboardPage.logOut
      await aa.scrollIntoView()
      logger.log("scrolled to logout")
      await aa.click() 
      logger.log('clicked on logoutButton')
    })
})