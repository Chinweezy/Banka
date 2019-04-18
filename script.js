function loadPage() {
  const homepage = document.getElementById('homepage');
  const userAcc = document.getElementById('dummy');
  const bankAccounts = document.getElementById('dummy1');
  bankAccounts.style.display = 'none';
  userAcc.style.display = 'none';
  homepage.style.display = 'block';
}

function loadAccPage() {
  const homepage = document.getElementById('homepage');
  const userAcc = document.getElementById('dummy');
  const bankAccounts = document.getElementById('dummy1');
  const createAccounts = document.getElementById('adminAccCreation');
  homepage.style.display = 'none';
  userAcc.style.display = 'none';
  createAccounts.style.display = 'none';
  bankAccounts.style.display = 'flex';
}

function loadUserAcc() {
  const homepage = document.getElementById('homepage');
  const userAcc = document.getElementById('dummy');
  const bankAccounts = document.getElementById('dummy1');
  const createAccounts = document.getElementById('adminAccCreation');
  homepage.style.display = 'none';
  bankAccounts.style.display = 'none';
  createAccounts.style.display = 'none';
  userAcc.style.display = 'flex';
}

function loadAccCreaction() {
  const homepage = document.getElementById('homepage');
  const userAcc = document.getElementById('dummy');
  const bankAccounts = document.getElementById('dummy1');
  const createAccounts = document.getElementById('adminAccCreation');
  homepage.style.display = 'none';
  bankAccounts.style.display = 'none';
  userAcc.style.display = 'none';
  createAccounts.style.display = 'block';

}
/*staff dashboard*/

function loadCreditPage() {
  const homepage = document.getElementById('homepage');
  const userAcc = document.getElementById('dummy');
  const bankAccounts = document.getElementById('dummy1');
  const payment = document.getElementById('creditOrDebit');
  homepage.style.display = 'none';
  bankAccounts.style.display = 'none';
  userAcc.style.display = 'none';
  payment.style.display = 'block';
}

function loadUser() {
  const homepage = document.getElementById('homepage');
  const userAcc = document.getElementById('dummy');
  const bankAccounts = document.getElementById('dummy1');
  const payment = document.getElementById('creditOrDebit');
  homepage.style.display = 'none';
  bankAccounts.style.display = 'none';
  payment.style.display = 'none';
  userAcc.style.display = 'table';

}

function loadAcc() {
  const homepage = document.getElementById('homepage');
  const userAcc = document.getElementById('dummy');
  const bankAccounts = document.getElementById('dummy1');
  const payment = document.getElementById('creditOrDebit');
  homepage.style.display = 'none';
  userAcc.style.display = 'none';
  payment.style.display = 'none';
  bankAccounts.style.display = 'table';
}

/* user-dashboard */
function loadOpenAccPage() {
  const homepage = document.getElementById('homepage');
  const openAccount = document.getElementById('dummy');
  const transactionHistory = document.getElementById('dummy2');
  homepage.style.display = 'none';
  transactionHistory.style.display = 'none';
  openAccount.style.display = 'block';
}

function loadTransHistory() {
  const homepage = document.getElementById('homepage');
  const openAccount = document.getElementById('dummy');
  const transactionHistory = document.getElementById('dummy2');
  homepage.style.display = 'none';
  openAccount.style.display = 'none';
  transactionHistory.style.display = 'flex';
}

function loadUserPage() {
  const homepage = document.getElementById('homepage');
  const openAccount = document.getElementById('dummy');
  const transactionHistory = document.getElementById('dummy2');
  transactionHistory.style.display = 'none';
  openAccount.style.display = 'none';
  homepage.style.display = 'block';
}


// function searchAccountRecord() {
//   const input = document.getElementById('myInput');
//   const filter = input.value.toUpperCase();
//   const table = document.getElementById('dummy-accounts');
//   const tr = table.getElementsByTagName('tr');
//   // eslint-disable-next-line no-plusplus
//   for (let i = 0; i < tr.length; i++) {
//     const td = tr[i].getElementsByTagName('td')[3];
//     if (td) {
//       const txtValue = td.textContent || td.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = '';
//       } else {
//         tr[i].style.display = 'none';
//       }
//     }
//   }

//   for (let j = 0; j < tr.length; j++) {
//     const td = tr[j].getElementsByTagName('td')[0];
//     if (td) {
//       const txtValue = td.textContent || td.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         tr[j].style.display = '';
//       } else {
//         tr[j].style.display = 'none';
//       }
//     }
//   }    
// }


function deleteUser() {
  const card = document.getElementById('card');
  const x = confirm('Are you sure you want to delete this user?');
  if (x === true) {
    card.parentNode.removeChild(card);
  }
}


function popUp() {
  let popupWindow = null;
  console.log('yo');
  popupWindow = window.open('credit-debit.html')
}

function debitToCredit() {
  let btnChange = document.getElementById('btnChange');
  let debit = document.getElementById('debit');
  let credit = document.getElementById('credit');
  if (debit.checked == true) {
    btnChange.value = 'Debit'; 
  }else {
    btnChange.value = 'Credit';
  }
}
