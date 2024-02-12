require('dotenv')
const {expect}=require('chai')

describe('Verify "configure IP setup" screen.',async()=>{
    it('enter valid Ip id ',async()=>{
        await browser.maximizeWindow()
        await browser.url(process.env.APP_URL)
        const eTitle=await browser.getTitle()
        expect(eTitle).to.be.equals('UNBOX DASHBOARD')
        browser.pause(3000)
    })
})