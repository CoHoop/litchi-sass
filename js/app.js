// The checkboxes work by using a hidden input (that is a sibling of the checkboxes) that is updated whenever a
// non-disabled checkbox is checked or unchecked.

$(function () {
	// Setup the default value for the checkboxes' hidden input
	$(".checkbox-holder").each(function () {
		updateCheckboxHiddenInputValue(this);
	});

	// Setup the behaviour when an element is clicked
	$(".checkbox:not(.disabled)").click(function () {
		toggleCheckBox(this);
	});

	// Setup the behaviour when space or enter is pressed
	$(".checkbox").keypress(function (e) {
		switch (e.keyCode || e.which) {
			case 32:
				toggleCheckBox(e.target);
				break;
			case 13:
				var form = $(e.target).closest('form');
				form.submit();
				break;
		}
	});

	setupCheckboxTabbing();
});

function updateCheckboxHiddenInputValue(parent) {
	var checkedBoxesArray = [];
	$(parent).find(".checkbox.selected").each(function () {
		var selectedCheckboxValue = $(this).attr("data-value");
		checkedBoxesArray.push(selectedCheckboxValue);
	});

	var checkboxHiddenInput = $(parent).find("input");
	checkboxHiddenInput.val(JSON.stringify(checkedBoxesArray));
}

function toggleCheckBox(checkBoxElement) {
	$(checkBoxElement).toggleClass("selected");
	updateCheckboxHiddenInputValue($(checkBoxElement).parent());
}

function setupCheckboxTabbing() {
	var currentTabIndex = 1;
	$(".checkbox:not(.disabled)").each(function () {
		$(this).attr("tabIndex", currentTabIndex);
		currentTabIndex++;
	});
}
// The radio buttons work by using a hidden input (that is a sibling of the radio buttons) that is updated whenever a
// non-disabled radio button is checked or unchecked.

$(function () {
	// Setup the default value for the radio buttons' hidden input
	$(".radio-button-holder").each(function () {
		updateRadioButtonsHiddenInputValue(this);
	});

	// Setup the behaviour when an element is clicked
	$(".radio-button:not(.disabled)").click(function () {
		toggleRadioButton(this);
	});

	// Setup the behaviour when space or enter is pressed
	$(".radio-button").keypress(function (e) {
		switch (e.keyCode || e.which) {
			case 32:
				toggleRadioButton(e.target);
				break;
			case 13:
				var form = $(e.target).closest('form');
				form.submit();
				break;
		}
	});

	setupRadioButtonTabbing();
});

function updateRadioButtonsHiddenInputValue(parent) {
	var valueOfFirstSelectedRadioButton = $(parent).find(".selected").first().attr("data-value");
	var radioButtonsHiddenInput = $(parent).find("input");
	radioButtonsHiddenInput.val(valueOfFirstSelectedRadioButton);
}

function toggleRadioButton(radioButtonElement) {
	// Change the radio buttons so only the selected one has the selected class
	$(radioButtonElement).parent().find(".radio-button").removeClass("selected");
	$(radioButtonElement).addClass("selected");

	updateRadioButtonsHiddenInputValue($(radioButtonElement).parent());
}

function setupRadioButtonTabbing() {
	var currentTabIndex = 1;
	$(".radio-button:not(.disabled)").each(function () {
		$(this).attr("tabIndex", currentTabIndex);
		currentTabIndex++;
	});
}
$(document).ready(function() {

	// Do not remove this bit, as it fixes transition bugs.
	$("body").removeClass("preload");

});