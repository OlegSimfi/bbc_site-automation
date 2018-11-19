
class BirthForms {
    get day() { return $('#day-input'); }
    get month() { return $('#month-input'); }
    get year() { return $('#year-input'); }
    get submitButton() { return $('#submit-button'); }

    fill(day, month, year) {
        if (day) {
            //  Enter date
            this.day.setValue(day);
        }
        if (month) {
            //  Enter month
            this.month.setValue(month);
        }
        if (year) {
            //  Enter year
            this.year.setValue(year);
        }
        browser.pause(2000); // Wait for Submit button click
        this.submitButton.click();
    }
}

class EmailAndPasswordForm {
    get email() { return $('#user-identifier-input'); }
    get password() { return $('#password-input'); }
    get submitButton() { return $('#submit-button'); }

    fill(email, password) {
        if (email) {
            //  Enter the email address
            this.email.setValue(email);
        }

        if (password) {
            //  Enter the password
            this.password.setValue(password);
        }
    }
}

module.exports = {
    BirthForms : new BirthForms(),
    EmailAndPasswordForm  : new EmailAndPasswordForm()
};