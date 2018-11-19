class BirthForm {
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
            //  Enter date
            this.month.setValue(month);
        }
        if (year) {
            //  Enter date
            this.year.setValue(year);
        }
        // Submit filling
        this.submitButton.click();

    }
}

module.exports = new BirthForm();
