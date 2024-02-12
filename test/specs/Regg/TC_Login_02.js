const workFlowLib=require('../../workflowLibrary/workflowLibrary')

describe('Verify login screen components',async()=>{
    it('Verify un texytfiled,pwd textfield,login button displayed',async()=>{
        await workFlowLib.componentsInTheLoginPage()
    })
})