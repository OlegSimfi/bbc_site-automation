class SettingsPage {
    get settingsTitle() {return $('//h2[.="Personal details"]'); }
    get displayNameAddButton () {return $('//div[@id="Display name-field"]//span[.="Add"]'); }
    get newDisplayNameInput () {return $('#new-display-name-input'); }
    get saveAndContinueButton () {return $('//button[.="Save and continue"]'); }
    get formMessageTitle () {return $('.form-message__title'); }
    get emailInput () {return $('//div[@id="Email-field"]//div[@class="field__input"]'); }
    get displayNameInput () {return $('//div[@id="Display name-field"]//div[@class="field__input"]'); }
    get ageField() {return $('//div[@id="Age-field"]//div[@class="field__input"]'); }
    get countryField() {return $('//div[@id="Country of residence-field"]//div[@class="field__input u-capitalise-first-word"]'); }
}

module.exports = new SettingsPage();