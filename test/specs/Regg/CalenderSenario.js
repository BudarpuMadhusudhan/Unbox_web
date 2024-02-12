const wfl=require("../../workflowLibrary/workflowLibrary.js")
require('dotenv').config
const bu=require('../../genericUtility/browserUtility.js')

describe('Cal',async()=>{
    it('calender',async()=>{
         await wfl.loginOperation(process.env.ROOTUSN,process.env.ROOTPWD)
         await browser.$('//div[@id="analytics"]').click()
         bu.calender("sept","22",1996)
    })
})