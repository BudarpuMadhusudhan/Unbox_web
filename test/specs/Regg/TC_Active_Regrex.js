const workflowLibrary = require("../../workflowLibrary/workflowLibrary")
const regex = require("../../pageobjects/Regex.js")
require('dotenv').config()

describe('Verify admin can Active Regrex button',async()=>{
    it('Active Regrex button',async()=>{
        await workflowLibrary.loginOperation(process.env.ROOTUSN,process.env.ROOTPWD)
        await regex.activeRegex()

    })
})