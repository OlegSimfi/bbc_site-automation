class RegisterPage {
    get registerPageTitle() {return $('//span[.="Зареєструватись на BBC"]'); }
    get ageSelectTitle() {return $('//span[.="Скільки вам років ?"]'); }
    get over13yearsOldButton() {return $('//span[.="13 років чи старше"]'); }
    get birthTitle() {return $('//span[.="What\'s your date of birth?"]'); }
    get location() {return $('#location-select'); }
    get registerPageTitle() {return $('//span[.="Зареєструватись на BBC"]'); }
    get unsubscribeButton() {return $('//span[.="Ні, дякую"]'); }
    get submitButton() { return $('#submit-button'); }
    get titleSuccess() {return $('.header__title--success'); }
    get registeredEmail() {return $('.text--heading'); }
    get finishRegistrationButton() {return $('[data-test-locator="return-to-ptrt"]'); }
}

module.exports = new RegisterPage();