var firefox = require('selenium-webdriver/firefox'),
	by = require('selenium-webdriver').By,
	path = require('path');

describe('checkboxes', function () {
	var driver;
	var CheckboxesPage = function () {
		this.get = function () {
			var uri = path.join(__dirname, 'checkboxes.html');
			driver.get(uri);
		};

		this.selectRed = function () {
			driver.findElement(by.id('redCheckbox')).click();
		};

		this.selectBlue = function () {
			driver.findElement(by.id('blueCheckbox')).click();
		};

		this.selectGreen = function () {
			driver.findElement(by.id('greenCheckbox')).click();
		};

		this.selectYellow = function () {
			driver.findElement(by.id('yellowCheckbox')).click();
		};

		this.selectFirst = function () {
			driver.findElement(by.id('firstCheckbox')).click();
		};

		this.selectSecond = function () {
			driver.findElement(by.id('secondCheckbox')).click();
		};

		this.submit = function () {
			driver.findElement(by.tagName('button')).click();
		};

		this.getSubmittedValues = function () {
			return driver.findElement(by.id('submittedValue')).getText();
		};
	};
	var checkboxesPage;

	beforeEach(function () {
		driver = new firefox.Driver();
		checkboxesPage = new CheckboxesPage();
		checkboxesPage.get();
	});

	afterEach(function () {
		driver.quit();
	});

	it('should have the default value if no changes are made', function (done) {
		checkboxesPage.submit();
		checkboxesPage.getSubmittedValues().then(function (text) {
			expect(text).toBe('?colourCheckboxes=["red","yellow"]&positionCheckboxes=["first"]');
			done();
		});
	});

	it('should have the value of all the checkboxes that are selected', function (done) {
		checkboxesPage.selectRed();
		checkboxesPage.selectBlue();
		checkboxesPage.submit();
		checkboxesPage.getSubmittedValues().then(function (text) {
			expect(text).toBe('?colourCheckboxes=["blue","yellow"]&positionCheckboxes=["first"]');
			done();
		});
	});

	it('should have the default value if only disabled checkboxes are clicked', function (done) {
		checkboxesPage.selectGreen();
		checkboxesPage.selectYellow();
		checkboxesPage.submit();
		checkboxesPage.getSubmittedValues().then(function (text) {
			expect(text).toBe('?colourCheckboxes=["red","yellow"]&positionCheckboxes=["first"]');
			done();
		});
	});

	it('should not blow up when nothing is selected', function (done) {
		checkboxesPage.selectFirst();
		checkboxesPage.submit();
		checkboxesPage.getSubmittedValues().then(function (text) {
			expect(text).toBe('?colourCheckboxes=["red","yellow"]&positionCheckboxes=[]');
			done();
		});
	});

	it('should not be affected by changes to other check boxes', function (done) {
		checkboxesPage.selectSecond();
		checkboxesPage.submit();
		checkboxesPage.getSubmittedValues().then(function (text) {
			expect(text).toBe('?colourCheckboxes=["red","yellow"]&positionCheckboxes=["first","second"]');
			done();
		});
	});
});