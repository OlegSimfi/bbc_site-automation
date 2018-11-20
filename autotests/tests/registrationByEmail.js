const MainPage = require('../pages/main.page');
const SignInPage = require('../pages/signin.page');
const RegisterPage = require('../pages/register.page');
const {BirthForms} = require('../pages/registerForms.page');
const {EmailAndPasswordForm} = require('../pages/registerForms.page');
const AccountPage = require('../pages/account.page');
const SettingsPage = require('../pages/settings.page');
const VerifyingPage = require('../pages/verify.page');

const day = "07";
const month = "02";
const year = "1987";
const timestamp = + new Date();
const emailForRegistration = 'qatester' + timestamp + '@mailinator.com';
const password = '!QAZ2wsx';
const displayName = "QAAutotest";


describe("Registration by Email", function () {
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
        expect(signInPageTitle).to.contain("Sign in");
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
        console.log(emailForRegistration);
        RegisterPage.location.selectByAttribute('value', 'ua');
        browser.pause(2000); //Wait for Unsubscribe button button click
        RegisterPage.unsubscribeButton.click();
        RegisterPage.submitButton.click();
    });
    it("Finish registration", function () {
        RegisterPage.titleSuccess.waitForExist();
        const registeredEmail = RegisterPage.registeredEmail.getText();
        expect(registeredEmail).to.contain(`${emailForRegistration} Change email`);
        RegisterPage.finishRegistrationButton.click();
        MainPage.yourAccountButton.waitForExist();
    });
    it("Open Your account", function () {
        MainPage.yourAccountButton.click();
        AccountPage.accountPageTitle.waitForExist();
        const accountPageTitle = AccountPage.accountPageTitle.getText();
        expect(accountPageTitle).to.contain("Lovely to see you here");
    });
    it("Open Settings", function () {
        AccountPage.settingsTab.click();
        SettingsPage.settingsTitle.waitForExist();
    });
    it("Change Display name", function () {
        AccountPage.settingsTab.click();
        SettingsPage.settingsTitle.waitForExist();
        SettingsPage.displayNameAddButton.click();
        SettingsPage.newDisplayNameInput.waitForExist();
        SettingsPage.newDisplayNameInput.setValue(displayName);
        SettingsPage.saveAndContinueButton.click();
        SettingsPage.formMessageTitle.waitForExist();
        const formMessageTitle = SettingsPage.formMessageTitle.getText();
        expect(formMessageTitle).to.contain("New display name saved");
    });
    it("Check registration data", function () {
        const emailInputValue = SettingsPage.emailInput.getText();
        expect(emailInputValue).to.contain(emailForRegistration);
        const displayNameInputValue = SettingsPage.displayNameInput.getText();
        expect(displayNameInputValue).to.contain(displayName);
        const ageFieldValue = SettingsPage.ageField.getText();
        expect(ageFieldValue).to.contain("Over 18");
        const countryFieldValue = SettingsPage.countryField.getText();
        expect(countryFieldValue).to.contain("Ukraine");
    });
    it("Confirm Email", function () {
        /// Steps in Mailinator.In the future, it is necessary to check mails by API //////////////////////////
        browser.url('https://www.mailinator.com/');
        browser.waitForExist('//h4[contains(.,"Use any email YOU think up!")]');
        browser.setValue('#inboxfield',emailForRegistration);
        browser.click('//button[contains(.,"Go!")]');
        browser.waitForExist('//td[contains(.,"Please verify your email address")]');
        browser.click('//td[contains(.,"Please verify your email address")]');
        browser.pause(3000);
        browser.waitForExist('//iframe[@id="msg_body"]');
        const mframe = $('//iframe[@id="msg_body"]').value;
        browser.frame(mframe);
        const titleOfEmail = browser.isExisting('//*[.="Verify your email address"]');
        expect(titleOfEmail).to.equal(true);
        browser.click('//*[.="Verify your email address"]');
        browser.pause(3000);
        ////////////////////////////////////////////////
        const tabIds = browser.getTabIds();
        browser.switchTab(tabIds[1]);
        VerifyingPage.verifyingTitle.waitForExist();
        const verifyingTitle = VerifyingPage.verifyingTitle.getText();
        expect(verifyingTitle).to.contain("Thanks for verifying your email");
        VerifyingPage.continueButton.click();
        MainPage.yourAccountButton.waitForExist();
        const userName = MainPage.yourAccountButton.getText();
        expect(userName).to.contain(displayName);
    });
});