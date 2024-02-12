const workFlowLib=require('../../workflowLibrary/workflowLibrary')
require('dotenv')

describe('Verify user should be able to login into application',async()=>{
    it('Verify user should be able to login with valid job id and password',async()=>{
       await workFlowLib.loginOperation(process.env.ROOTUSN,process.env.ROOTPWD)
    })
})