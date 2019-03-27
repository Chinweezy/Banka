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

function searchAccountRecord() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("dummy-accounts");
  tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {  
            tr[i].style.display = "none";
            }
        }
    }

    for (j = 0; j < tr.length; j++) {
        td = tr[j].getElementsByTagName("td")[0];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[j].style.display = "";
          } else {  
            tr[j].style.display = "none";
            }
        }
    }    
}


function deleteUser(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("dummy-accounts").deleteRow(i);
}
