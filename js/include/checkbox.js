function updateCheckboxInputValue(parent) {
	var checkedBoxesArray = [];
	$(parent).find(".checkbox").each(function () {
		if ($(this).hasClass("selected")) {
			var selectedCheckboxValue = $(this).attr("data-value");
			checkedBoxesArray.push(selectedCheckboxValue);
		}
	});

	var checkboxHiddenInput = $(parent).find("input");
	checkboxHiddenInput.val(JSON.stringify(checkedBoxesArray));
}

// Setup the default value for the checkboxes' hidden input
$(function () {
	$(".checkbox-holder").each(function () {
		updateCheckboxInputValue(this);
	});
});

// This controls the behaviour of the custom radio buttons. A hidden input (that is a sibling of the checkboxes) is
// updated when a non-disabled checkbox is checked or unchecked.
$(document).on("click", ".checkbox", function () {
	if ($(this).hasClass("disabled")) {
		return false;
	}

	$(this).toggleClass("selected");

	updateCheckboxInputValue($(this).parent());
});
