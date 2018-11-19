class MainPage {
    get mainPageTitle() {return $('//span[.="Welcome to BBC.com"]'); }
    get signIn() {return $('//span["#idcta-link"]'); }
}

module.exports = new MainPage();