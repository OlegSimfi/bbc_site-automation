class RegisterPage {
    get registerPageTitle() {return $('//span[.="Register with the BBC"]'); }
    get ageSelectTitle() {return $('//span[.="Let’s start. This account is for someone who is..."]'); }
    get over13yearsOldButton() {return $('//span[.="13 or over"]'); }
    get birthTitle() {return $('//span[.="What\'s your date of birth?"]'); }
    get location() {return $('#location-select'); }
    get unsubscribeButton() {return $('//span[.="No, thanks"]'); }
    get submitButton() { return $('#submit-button'); }
    get titleSuccess() {return $('.header__title--success'); }
    get registeredEmail() {return $('.text--heading'); }
    get finishRegistrationButton() {return $('[data-test-locator="return-to-ptrt"]'); }
}

module.exports = new RegisterPage();