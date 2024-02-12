const logg =require('../logger.js')

class BrowserUtility {

    doClick(element)
    {
        element.waitForDisplayed();
        element.click();
    }

    doSetValue(element, text) 
    {
        element.waitForDisplayed();
        element.setValue(text);
    }

    doIsDisplayed(element) 
    {
        element.waitForDisplayed();
        return element.isDisplayed();
    }

    doGetText(element) 
    {
        element.waitForDisplayed();
        return element.getText();
    }
/**
 * This function is devloped for calender
 * @param {*} month 
 * @param {*} day 
 * @param {*} year 
 */
   async calender(month="September ",day=10,year="2023") {
        //$(`//h2[text()='Lower Range']/parent::div/child::div[@class="react-datetime-picker react-datetime-picker--closed react-datetime-picker--enabled"]`).click()
         $("//h2[text()='Lower Range']/parent::div/child::div/child::div/child::div/child::input[2]").click()
        logg.log("Clicked on calender textfiled")
           await browser.pause(10000)
          const displayDate= await $('//span[@class="react-calendar__navigation__label__labelText react-calendar__navigation__label__labelText--from"]').getText()
          while (true) {
            if(displayDate.includes(month+year))
        {
        $(`//button[@class="react-calendar__navigation__label"]/parent::div/parent::div/div[2]/div/div/div/div[2]/button/abbr[text()='${day}']`).click()
        }
        else
        {
            $('//button[@class="react-calendar__navigation__arrow react-calendar__navigation__prev-button"]').click()
        }
          }   
    }
    






}
 module.exports = new BrowserUtility()