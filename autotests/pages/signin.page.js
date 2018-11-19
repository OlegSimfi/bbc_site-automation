class SignInPage {
    get signInPageTitle() {return $('//h1'); }
    get registerNowButton() {return $('//span[.="Register now"]'); }
    get ageSelectorTitle() {return $('//span[.="Скільки вам років ?"]'); }
}

module.exports = new SignInPage();