//IMPORTS
const fs = require("fs")
let Testdata = JSON.parse(fs.readFileSync('./test/specs/Testdata/data.json'))
const workflowLibrary = require('../../workflowLibrary/workflowLibrary')
//SCRIPT
describe(`Verify Admin user should be able to add/edit/delete dashboard users from myteam screen`, async () => {
    Testdata.forEach(({ TESTUSN, TESTPWD, TESTPWDMOD }) => {
        it(`Create a Dashboard user, Edit a Dashboard User and Delete a Dashboard User`, async () => {
            await workflowLibrary.loginOperation(process.env.ROOTUSN, process.env.ROOTPWD)
            await workflowLibrary.createUser(TESTUSN, TESTPWD, process.env.SECURITY_KEY)
            await workflowLibrary.modifyUser(TESTUSN, TESTPWDMOD)
            await workflowLibrary.deleteUser(TESTUSN)
        })
    })
})
