import { browser, element, by, Key, ExpectedConditions } from 'protractor'
import { user } from './user.helper'

describe('gmail login', () => {
    const until = ExpectedConditions

    beforeAll( () => {
        browser.waitForAngularEnabled(false)
    })

    afterAll( async () => {
        await browser.executeScript('window.sessionStorage.clear()')
        await browser.executeScript('window.localStorage.clear()')
        await browser.restart()
    })

    it('goes to gmail website', async () => {
        await browser.get('http://www.gmail.com')
    })

    it('inserts user name',  () => {

        browser.element(by.css('input[type="email"]')).sendKeys(user.userName)
    })

    it('presses the next button', () => {
        browser.element(by.id('identifierNext')).click()

    })

    it('inserts the password', () => {
        const passwordInput = browser.element(by.css('input[type="password"]'))

        browser.wait(until.visibilityOf(passwordInput), 5000)

        browser.element(by.css('input[type="password"]')).sendKeys(user.password)
        browser.element(by.id('passwordNext')).click()

        browser.wait(until.urlContains('mail.google.com'), 5000)

    })
})

