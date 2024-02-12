

class settingPage
{
    get systemLocationtextFiled()
    {
        return $('//input[@placeholder="Enter Sorter System Location"]')
    }

    get submitButton()
    {
        return $("//button[text()='SUBMIT']")
    }

    
}

module.exports = new settingPage()