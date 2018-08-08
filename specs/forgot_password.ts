import { browser, by, ExpectedConditions } from 'protractor'
import { user } from './user.helper'


describe('gmail forgot password', () => {
    const until = ExpectedConditions

    beforeAll( () => {
        browser.waitForAngularEnabled(false)
    })

    afterAll( () => {
        browser.executeScript('window.sessionStorage.clear()')
        browser.executeScript('window.localStorage.clear()')
    })

    it('goes to gmail website', () => {
        browser.get('http://www.gmail.com')
    })

    it('inserts user name',  () => {

        browser.element(by.css('input[type="email"]')).sendKeys(user.userName)
    })

    it('presses the next button', () => {
        browser.element(by.id('identifierNext')).click()
    })

    it('presses forgot password', () => {
        const passwordInput = browser.element(by.css('input[type="password"]'))

        browser.wait(until.visibilityOf(passwordInput), 5000)

        const forgotPasswordButton = browser.element(by.id('forgotPassword'))

        forgotPasswordButton.click()

        browser.wait(until.visibilityOf(browser.element(by.id('headingText'))))
    })


})

