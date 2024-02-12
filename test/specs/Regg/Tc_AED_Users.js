const workFlowLib=require('../../workflowLibrary/workflowLibrary')
const fs =require('fs')
const Testdata =JSON.parse(fs.readFileSync("./test/specs/Testdata/data.json"))
require('dotenv').config()

describe("Verfiy admin can add the user,edit the user,delete the user",async()=>{
    Testdata.forEach(({TESTUSN,TESTPWD,TESTPWDMOD }) => {
        it('Add user,Edit user,Delete user',async()=>{
            await workFlowLib.loginOperation(process.env.ROOTUSN,process.env.ROOTPWD)
            await workFlowLib.createUser(TESTUSN,TESTPWD,process.env.SECURITY_KEY)
            await workFlowLib.modifyUser(TESTUSN,TESTPWDMOD)
            await workFlowLib.deleteUser(TESTUSN)
        }) 
    });
   
})