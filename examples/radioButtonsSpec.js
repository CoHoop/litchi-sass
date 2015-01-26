var webDriver = require('selenium-webdriver'),
	firefox = require('selenium-webdriver/Firefox'),
	path = require('path');

describe('radio buttons', function () {
	var driver;
	var RadioButtonPage = function () {
		this.get = function () {
			var uri = path.join(__dirname, 'radioButtons.html');
			driver.get(uri);
		};

		this.selectRed = function () {
			driver.findElement(webDriver.By.id('redRadioButton')).click();
		};

		this.selectBlue = function () {
			driver.findElement(webDriver.By.id('blueRadioButton')).click();
		};

		this.selectGreen = function () {
			driver.findElement(webDriver.By.id('greenRadioButton')).click();
		};

		this.selectFirst = function () {
			driver.findElement(webDriver.By.id('firstRadioButton')).click();
		};

		this.pressTab = function () {
			driver.switchTo().activeElement().sendKeys(webDriver.Key.TAB);
		};

		this.pressSpace = function () {
			driver.switchTo().activeElement().sendKeys(webDriver.Key.SPACE);
		};

		this.pressEnter = function () {
			driver.switchTo().activeElement().sendKeys(webDriver.Key.ENTER);
		};

		this.submit = function () {
			driver.findElement(webDriver.By.tagName('button')).click();
		};

		this.getSubmittedValues = function () {
			return driver.findElement(webDriver.By.id('submittedValue')).getText();
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

	it('should be usable with just the keyboard', function (done) {
		radioButtonPage.pressTab();
		radioButtonPage.pressTab();
		radioButtonPage.pressSpace();
		radioButtonPage.pressEnter();
		radioButtonPage.getSubmittedValues().then(function (text) {
			expect(text).toBe('?colourRadioButtons=blue&positionRadioButtons=second');
			done();
		});
	});
});