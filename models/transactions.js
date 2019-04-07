//var express = require("express");
//var app = express();

//var server = app.listen(8081, function() {
//	var host = server.address().address
//	var port = server.address().port
//})

const transactions = [{
  id: 1234,
  createdOn: '2019-04-07T12:30:00Z',
  type: 'credit', // credit or debit
  accountNumber: 4026785004,
  cashier: 1, // cashier who consummated the transaction
  amount: 2500.00,
  oldBalance: 50000.00,
  newBalance: 52500.00,
},
{
  id: 1235,
  createdOn: '2019-04-05T15:45:00Z',
  type: 'debit', // credit or debit
  accountNumber: 4026785005,
  cashier: 3, // cashier who consummated the transaction
  amount: 5000.00,
  oldBalance: 7956.89,
  newBalance: 2956.89,
},
];