import accounts from '../../models/accounts';
import jwt from 'jsonwebtoken';
import users from '../../models/user'


const accountsController = {
  // Get all accounts
  list(req, res) {
    res.status(200).send(accounts);
  },

  create(req, res) {
    const user = {
      id: accounts.length + 1,
      accountNumber: req.body.accountNumber,
      CreatedOn: new Date(),
      owner: req.body.owner,
      type: req.body.type,
      status: req.body.status,
      balance: req.body.openingbalance,
    };
    const newAccount = {
      accountNumber: user.accountNumber,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      type: req.body.type,
      openingBalance: req.body.openingBalance,
    };
    if (!req.body.firstName) {
      res.status(400).send({ error: 'First name is required' });
    } if (!req.body.lastName) {
      res.status(400).send({ error: 'Last name is required' });
    } if (!req.body.email) {
      res.status(400).send({ error: 'Email is required' });
    } if (!req.body.password) {
      res.status(400).send({ error: 'Password is required' });
    }
    accounts.push(user);
    res.status(201).send({
      status: 201,
      data: newAccount,
    });
  },

  delete(req, res) {
    const { accountNumber } = req.params;
    const findAccountNum = accounts.find(account => account.accountNumber === parseInt(accountNumber, 10));
    const index = accounts.indexOf(findAccountNum);
    if (findAccountNum) {
      accounts.splice(index, 1);
      res.status(200).send({ message: 'You have succesfully deleted account details' });
      return;
    }
    res.status(400).send({ message: 'You entered a wrong account number' });
  },
};

export default accountsController;
