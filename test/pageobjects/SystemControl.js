class SystemControl
{
    get regex()
    {
        return $("//span[text()='Regex']")
    }



   async updateRegex()
    {
        this.regex.click()

    }
}

module.exports= new SystemControl()