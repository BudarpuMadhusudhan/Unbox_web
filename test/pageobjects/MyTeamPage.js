class MyTeamPage {

    get myTeamHeaderText() {
        return $("//div[@class='header-heading']")
    }

    get addUserButton() {
        return $("//button[@class='fetch-reports btn-blue d-block ml-auto']")
    }

    get heading(){
        return $("//h2")
    }

    async editUser(username) {
        return $(`//table/tr/td[.='${username}']/parent::tr/td[.='EDIT']`)
    }

    async deleteUser(username) {
        return $(`//table/tr/td[.='${username}']/parent::tr/td[.='DELETE']`)
    }

    get userNameTextfield() {
        return $("//input[@name='username']")
    }

    get userPasswordTextfield() {
        return $("//input[@name='password']")
    }

    get isaAdminCheckbox() {
        return browser.$("//input[@type='checkbox' and @name='isAdmin']")
    }

    get securityKeyTextField() {
        return browser.$("//input[@name='authenticationKey' and @type='text']")
    }

    get confirmButton() {
        return browser.$("//button[@class='btn-blue' and .='CONFIRM']")
    }

    get bundlButton(){
        return browser.$("//button[@id='downtime' and .='BUNDL']")
    }

    get feederButton(){
        return browser.$("//button[@id='downtime' and .='Feeder']")
    }
}
module.exports = new MyTeamPage()