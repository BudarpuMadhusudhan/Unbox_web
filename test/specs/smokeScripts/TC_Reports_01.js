//IMPORTS
const fs = require("fs")
let Testdata = JSON.parse(fs.readFileSync('./test/specs/Testdata/data.json'))
const dashboardpage = require('../../pageobjects/DashboardPage')
const workflowLibrary = require('../../workflowLibrary/workflowLibrary')
//SCRIPT
describe(`Verify the submodules under reports module`, async () => {
    Testdata.forEach(({ SHIPMENTDETAILS, REJECTION, BAGS_CLOSED, DATA_PUSH_LOGS_PARCELS,
        DATA_PUSH_LOGS_BAG_SEAL, BIN_WISE_SHIPMENT_VOLUME,
        ERROR_LOGS, ERROR_LOGS_SUMMARY }) => {
        it(`Verify all the Sub modules of reports module`, async () => {
            await workflowLibrary.loginOperation(process.env.ROOTUSN, process.env.ROOTPWD)
            await dashboardpage.reports.click()
            await workflowLibrary.verifyAllReportsoptions(SHIPMENTDETAILS, REJECTION, BAGS_CLOSED, DATA_PUSH_LOGS_PARCELS,
                DATA_PUSH_LOGS_BAG_SEAL, BIN_WISE_SHIPMENT_VOLUME,
                ERROR_LOGS, ERROR_LOGS_SUMMARY)
        })
    })
})
