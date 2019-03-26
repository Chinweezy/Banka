/*function signout(){
	self.close(this.window);
	window.location = "index.html";
}

var collapse = document.getElementsByClassName("collapsible");
var i;

	for (i = 0; i < collapse.length; i++) {
		collapse[i].addEventListener("click", function() {
			this.classList.toggle("active");
    		var content = this.nextElementSibling;
    		if (content.style.display === "block") {
    			content.style.display = "none";
    		} else {
    			content.style.display = "block";
    	}
  	};
}*/
function loadPage() {
    var homepage = document.getElementById("homepage");
    var bankAccounts = document.getElementById("dummy");
    bankAccounts.style.display = "none";
    homepage.style.display = "block";

}

function loadAccPage() {
    var homepage = document.getElementById("homepage");
    var bankAccounts = document.getElementById("dummy");
    homepage.style.display = "none";
    bankAccounts.style.display = "table";
}

