class MainPage {
    get mainPageTitle() {return $('//span[.="Welcome to BBC.com"]'); }
    get signIn() {return $('//span["#idcta-link"]'); }
    get yourAccountButton() {return $('#idcta-username'); }

}

module.exports = new MainPage();