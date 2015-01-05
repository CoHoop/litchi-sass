var firefox = require('selenium-webdriver/firefox'),
	by = require('selenium-webdriver').By,
	path = require('path');

describe('radio buttons', function () {
	var driver;
	var RadioButtonPage = function () {
		this.get = function () {
			var uri = path.join(__dirname, 'radioButtons.html');
			driver.get(uri);
		};

		this.selectRed = function () {
			driver.findElement(by.id('redRadioButton')).click();
		};

		this.selectBlue = function () {
			driver.findElement(by.id('blueRadioButton')).click();
		};

		this.selectGreen = function () {
			driver.findElement(by.id('greenRadioButton')).click();
		};

		this.selectFirst = function () {
			driver.findElement(by.id('firstRadioButton')).click();
		};

		this.submit = function () {
			driver.findElement(by.tagName('button')).click();
		};

		this.getSubmittedValues = function () {
			return driver.findElement(by.id('submittedValue')).getText();
		};
	};
	var radioButtonPage;

	beforeEach(function () {
		driver = new firefox.Driver();
		radioButtonPage = new RadioButtonPage();
		radioButtonPage.get();
	});

	afterEach(function () {
		driver.quit();
	});

	it('should have the default value if no changes are made', function (done) {
		radioButtonPage.submit();
		radioButtonPage.getSubmittedValues().then(function (text) {
			expect(text).toBe('?colourRadioButtons=red&positionRadioButtons=second');
			done();
		});
	});

	it('should have the value of the last clicked radio button', function (done) {
		radioButtonPage.selectBlue();
		radioButtonPage.selectRed();
		radioButtonPage.selectBlue();
		radioButtonPage.submit();
		radioButtonPage.getSubmittedValues().then(function (text) {
			expect(text).toBe('?colourRadioButtons=blue&positionRadioButtons=second');
			done();
		});
	});

	it('should have the default value if the selected radio button is clicked again', function (done) {
		radioButtonPage.selectRed();
		radioButtonPage.submit();
		radioButtonPage.getSubmittedValues().then(function (text) {
			expect(text).toBe('?colourRadioButtons=red&positionRadioButtons=second');
			done();
		});
	});

	it('should have the default value if only disabled radio buttons are clicked', function (done) {
		radioButtonPage.selectGreen();
		radioButtonPage.submit();
		radioButtonPage.getSubmittedValues().then(function (text) {
			expect(text).toBe('?colourRadioButtons=red&positionRadioButtons=second');
			done();
		});
	});

	it('should not be affected by changes to other radio buttons', function (done) {
		radioButtonPage.selectFirst();
		radioButtonPage.submit();
		radioButtonPage.getSubmittedValues().then(function (text) {
			expect(text).toBe('?colourRadioButtons=red&positionRadioButtons=first');
			done();
		});
	});
});