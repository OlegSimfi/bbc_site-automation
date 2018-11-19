const MainPage = require('../pages/main.page');
const SignInPage = require('../pages/signin.page');
const RegisterPage = require('../pages/register.page');
const {BirthForms} = require('../pages/registerForms.page');
const {EmailAndPasswordForm} = require('../pages/registerForms.page');


const day = "07";
const month = "02";
const year = "1987";
const timestamp = + new Date();
const emailForRegistration = 'qatester' + timestamp + '@mailinator.com';
const password = '!QAZ2wsx';


describe("Search User by Name", function () {
    it("Open Main page", function () {
        browser.url('');
        MainPage.mainPageTitle.waitForExist();
        const mainPageTitle = MainPage.mainPageTitle.getText();
        expect(mainPageTitle).to.contain("Welcome to BBC.com");
    });
    it("Open SignIn page", function () {
        MainPage.signIn.click();
        SignInPage.signInPageTitle.waitForExist();
        const signInPageTitle = SignInPage.signInPageTitle.getText();
        expect(signInPageTitle).to.contain("Привіт ще раз");
    });
    it("Open Register form", function () {
        SignInPage.registerNowButton.click();
        RegisterPage.registerPageTitle.waitForExist();
    });
    it("Select you age", function () {
        RegisterPage.registerPageTitle.waitForExist();
        const ageSelectTitle = RegisterPage.ageSelectTitle.isExisting();
        expect(ageSelectTitle).to.equal(true);
        RegisterPage.over13yearsOldButton.click();
        RegisterPage.birthTitle.waitForExist();
    });
    it("Fill Birth form ", function () {
        BirthForms.fill(day, month, year);
        RegisterPage.registerPageTitle.waitForExist();
    });
    it("Fill Email and Password form", function () {
        EmailAndPasswordForm.fill(emailForRegistration, password);
        RegisterPage.location.selectByAttribute('value', 'ua');
        browser.pause(2000); //Wait for Unsubscribe button button click
        RegisterPage.unsubscribeButton.click();
        RegisterPage.submitButton.click();
    });
    it("Finish registration", function () {
        RegisterPage.titleSuccess.waitForExist();
        const registeredEmail = RegisterPage.registeredEmail.getText();
        expect(registeredEmail).to.contain(`${emailForRegistration} Змінити email`);
        RegisterPage.finishRegistrationButton.click();
        MainPage.yourAccountButton.waitForExist();
    });
});