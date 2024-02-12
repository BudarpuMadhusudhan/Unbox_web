require("dotenv").config()
class WelcomePage {
    get userIDTextField() {
        return $("//input[@type='email']")
    }

    get userPasswordTextField() {
        return $("//input[@type='password']")
    }

    get loginButton() {
       // return $("//button[.='LOGIN']")
        return $("//button[.='Sign In']")
        
    }

    get alertText() {
       // return $("//div[@class='Toastify__toast Toastify__toast--success']/descendant::div[@role='alert']")
       return $("//div[@class='Toastify__toast Toastify__toast--success' or @class='Toastify__toast Toastify__toast--error']/descendant::div[@role='alert']")
    }

    get closeMessage() {
        return $("//*[name()='svg']")
    }

}
module.exports = new WelcomePage()
