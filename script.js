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
    var userAcc = document.getElementById("dummy");
    var bankAccounts = document.getElementById("dummy1");
    bankAccounts.style.display = "none";
    userAcc.style.display = "none";
    homepage.style.display = "block";
}

function loadAccPage() {
    var homepage = document.getElementById("homepage");
    var userAcc = document.getElementById("dummy");
    var bankAccounts = document.getElementById("dummy1");
    var createAccounts = document.getElementById("adminAccCreation");
    homepage.style.display = "none";
    userAcc.style.display = "none";
    createAccounts.style.display = "none"
    bankAccounts.style.display = "table";
}

function loadUserAcc() {
    var homepage = document.getElementById("homepage");
    var userAcc = document.getElementById("dummy");
    var bankAccounts = document.getElementById("dummy1");
    var createAccounts = document.getElementById("adminAccCreation");
    homepage.style.display="none";
    bankAccounts.style.display="none";
    createAccounts.style.display = "none";
    userAcc.style.display="table";
}

function loadAccCreaction(){
    var homepage = document.getElementById("homepage");
    var userAcc = document.getElementById("dummy");
    var bankAccounts = document.getElementById("dummy1");
    var createAccounts = document.getElementById("adminAccCreation");
    homepage.style.display="none";
    bankAccounts.style.display="none";
    userAcc.style.display="none";
    createAccounts.style.display = "block"

}
/*staff dashboard*/

function loadCreditPage() {
    var homepage = document.getElementById("homepage");
    var userAcc = document.getElementById("dummy");
    var bankAccounts = document.getElementById("dummy1");
    var payment= document.getElementById("creditOrDebit");
    homepage.style.display="none";
    bankAccounts.style.display="none";
    userAcc.style.display="none";
    payment.style.display = "block"
}

function loadUser() {
    var homepage = document.getElementById("homepage");
    var userAcc = document.getElementById("dummy");
    var bankAccounts = document.getElementById("dummy1");
    var payment= document.getElementById("creditOrDebit");
    homepage.style.display="none";
    bankAccounts.style.display="none";
    payment.style.display = "none"
    userAcc.style.display="table";

}

function loadAcc(){
    var homepage = document.getElementById("homepage");
    var userAcc = document.getElementById("dummy");
    var bankAccounts = document.getElementById("dummy1");
    var payment= document.getElementById("creditOrDebit");
    homepage.style.display = "none";
    userAcc.style.display = "none";
    payment.style.display = "none"
    bankAccounts.style.display = "table";
}

/*user-dashboard*/
function loadOpenAccPage() {
    var homepage = document.getElementById("homepage");
    var openAccount = document.getElementById("dummy");
    var transactionHistory = document.getElementById("dummy2")
    homepage.style.display = "none";
    transactionHistory.style.display = "none";
    openAccount.style.display = "block";
} 
 function loadTransHistory() {
    var homepage = document.getElementById("homepage");
    var openAccount = document.getElementById("dummy");
    var transactionHistory = document.getElementById("dummy2");
    homepage.style.display = "none";
    openAccount.style.display = "none";
    transactionHistory.style.display = "table";
} 

function loadUserPage() {
    var homepage = document.getElementById("homepage");
    var openAccount = document.getElementById("dummy");
    var transactionHistory = document.getElementById("dummy2");
    transactionHistory.style.display = "none";
    openAccount.style.display = "none";
    homepage.style.display="block";
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
    var x = confirm("Are you sure you want to delete this user?");
    if (x == true) {
    document.getElementById("dummy-accounts").deleteRow(i);
  }
}


function popUp() {
  var popupWindow = null;
  console.log("yo");
  popupWindow = window.open("credit-debit.html")
}

function debitToCredit() {
  var btnChange = document.getElementById("btnChange");
  var debit = document.getElementById("debit");
  var credit = document.getElementById("credit");
  if (debit.checked == true) {
    btnChange.value = "Debit"; 
  }else {
    btnChange.value = "Credit";
  }
}
