//IMPORTS
const fs = require("fs")
let Testdata = JSON.parse(fs.readFileSync('./test/specs/Testdata/data.json'))
const workflowLibrary = require('../../workflowLibrary/workflowLibrary')
//SCRIPT
describe(`Verify Admin user should be able to add/edit/delete Feeder users from myteam screen`, async () => {
    Testdata.forEach(({ TESTUSN, TESTPWD, TESTPWDMOD }) => {
        it(`Signin and get the title,
        Click on Feeder Button
        Click on add button,
        Enter username ,password and click on create,
        Click on edit button,
        Modify password and click on update,
        Click delete button to whom you want to delete`, async () => {
            await workflowLibrary.loginOperation(process.env.ROOTUSN, process.env.ROOTPWD)
            await workflowLibrary.createFeederUser(TESTUSN, TESTPWD)
            await workflowLibrary.modifyFeederUser(TESTUSN, TESTPWDMOD)
            await workflowLibrary.deleteFeederUser(TESTUSN)
        })
    })
})