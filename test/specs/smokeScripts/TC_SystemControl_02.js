//IMPORTS
const fs = require("fs")
let Testdata = JSON.parse(fs.readFileSync('./test/specs/Testdata/data.json'))
const dashboardpage=require('../../pageobjects/DashboardPage')
const workflowLibrary = require('../../workflowLibrary/workflowLibrary')
//SCRIPT
describe(`Verify the sub modules of system control`, async () => {
  Testdata.forEach(({ SORTMAP, REGEX, ROBOTS, FEEDER, BIN, BAG, PRINTER }) => {
  it(`Check the sub modules of system control, Verify all the options`, async () => {
    await workflowLibrary.loginOperation(process.env.ROOTUSN,process.env.ROOTPWD)
    await dashboardpage.systemControl.click()
    await workflowLibrary.verifyAllSystemControloptions( SORTMAP, REGEX, ROBOTS, FEEDER, BIN, BAG, PRINTER)
    })
  })
})
