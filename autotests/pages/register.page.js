class RegisterPage {
    get registerPageTitle() {return $('//span[.="Зареєструватись на BBC"]'); }
    get ageSelectTitle() {return $('//span[.="Скільки вам років ?"]'); }
    get over13yearsOldButton() {return $('//span[.="13 років чи старше"]'); }
    get birthTitle() {return $('//span[.="What\'s your date of birth?"]'); }


}

module.exports = new RegisterPage();