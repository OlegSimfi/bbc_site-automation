class AccountPage {
    get accountPageTitle() {return $('.heading--hero'); }
    get settingsTab() {return $('//span[.="Settings"]'); }
}

module.exports = new AccountPage();