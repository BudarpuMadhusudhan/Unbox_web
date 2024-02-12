const workLib=require('../../workflowLibrary/workflowLibrary.js')
const v3_dashboard=require('../../pageobjects/V3_Dashboard.js')
const du = require('../../genericUtility/db.js')
require('dotenv').config()

describe('Verify the count of Bins available',async()=>{
    it('Bins Availanble',async()=>
    {
       const data= await du.executeQueryInDatabase(`select count(*) binsAvailable
        from ecs.tns_bin_config tbc
        inner join ecs.tns_bin_status tbs
        on tbs.bin_id =tbc.bin_id 
        where tbc.bin_type !='rejectionTrolly' and tbs.bin_state ='binActive' and tbc.order_id is null`)
        console.log(data);
        await workLib.loginOperation(process.env.ROOTUSN,process.env.ROOTPWD)
        let count1= await v3_dashboard.getBinCount()
        await console.log(count1);
        await expect(data[0].binsavailable).to.equal(count1)
    })
})