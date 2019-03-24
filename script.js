var currentTab = 0;

showTab(currentTab);

function showTab(n) {
	var x = getElementsByClassName("tab");

	if(n==0) {
		document.getElementsById("prevBtn").style.display = "none"
	} else {
		document.getElementsById("prevBtn")
	}
	if (n == (x.length -1)) {
		document.getElementsById("nextBtn")= "Submit"
	} else {
		document.getElementsById("nextBtn")= "Next"
	}
	fixStepIndicator(n)
}

function nextPrev(n) {
	var x = getElementsByClassName("tab");

	if(n==1 && !validateForm()) {
		return false;
		x[currentTab].style.display = "none";
		currentTab += n;
	}

	if(currentTab >= x.length) {
		document.getElementsById("accForm").Submit();
		return false;
	}
	showTab(currentTab)
}

function validateForm() {
	var x, y, i, valid = true;
}