class VerifyingPage {
    get verifyingTitle() {return $('.header__title--success'); }
    get continueButton() {return $('[data-test-locator="return-to-ptrt"]'); }
}

module.exports = new VerifyingPage();