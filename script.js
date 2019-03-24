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
	x = getElementsByClassName("tab");
	y = x[currentTab].getElementsByTagName("input");

	for (i = 0; i < y.length; i++) {
		if(y[i].value == "") {
			y[i].className += "invalid";
			valid = false;
		} 
	} 
	if (valid) {
		document.getElementsByClassName("step")[currentTab].className += "finish"
	}
	return valid
}

function fixStepIndicator(n) {
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}