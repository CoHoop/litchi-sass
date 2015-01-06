function updateRadioButtonInputValue(parent) {
	var valueOfFirstSelectedRadioButton = $(parent).find(".selected").first().attr("data-value");
	var radioButtonsHiddenInput = $(parent).find("input");
	radioButtonsHiddenInput.val(valueOfFirstSelectedRadioButton);
}

// Setup the default value for the radio buttons' hidden input
$(function () {
	$(".radio-button-holder").each(function () {
		updateRadioButtonInputValue(this);
	});
});

// Controls the behaviour of the custom radio buttons. A hidden input (that is a sibling of the radio buttons) is
// updated when a non-disabled radio button is selected.
$(document).on("click", ".radio-button", function () {
	if ($(this).hasClass("disabled")) {
		return false;
	}

	// Change the radio buttons so only the selected one has the selected class
	$(this).parent().find(".radio-button").removeClass("selected");
	$(this).addClass("selected");

	updateRadioButtonInputValue($(this).parent());
});
