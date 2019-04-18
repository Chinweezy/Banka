const accounts = [{
  id: 1,
  accountNumber: 4020000001,
  createdOn: '2019-03-01T10:00:00Z',
  owner: 2, // user id
  type: 'savings', // savings, current
  status: 'active', // draft, active, or dormant
  balance: 52500.00,
},
{
  id: 2,
  accountNumber: 4020000002,
  createdOn: '2019-03-25T8:00:45Z',
  owner: 4, // user id
  type: 'Savings', // savings, current
  status: 'draft', // draft, active, or dormant
  balance: 2956.89,
},
{
  id: 3,
  accountNumber: 4020000003,
  createdOn: '2019-04-01T14:10:02Z',
  owner: 5, // user id
  type: 'current', // savings, current
  status: 'dormant', // draft, active, or dormant
  balance: 12780.60,
},
];

export default accounts;
