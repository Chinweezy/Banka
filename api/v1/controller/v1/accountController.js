import accounts from '../../models/accounts';
// import users from '../../models/user';


class accountController {
  // Get all accounts
  static list(req, res) {
    res.status(200).send({ status: 200, data: accounts });
  }

  /* static create(req, res) {
    const newAccount = {
      // id: accounts.length + 1,
      accountNumber: accounts[accounts.length - 1][1] + 1,
      CreatedOn: new Date(),
      // eslint-disable-next-line no-use-before-define
      owner: findUser.id,
      type: req.body.type,
      status: req.body.status,
      balance: req.body.openingbalance,
    };

    const display = {};
    // display.id = newAccount.id;
    display.accountNumber = newAccount.accountNumber;
    display.firstName = req.body.firstName;
    display.lastName = req.body.lastName;
    display.email = req.body.email;
    display.openingBalance = req.body.openingBalance;

    const findUser = users.find(user => user.email === display.email);

    const isEmpty = Object.values(newAccount).every(x => (x === null || x === '""'));
    if (!req.body.firstName) res.status(400).send({ error: 'First name is required' });
    if (!req.body.lastName) res.status(400).send({ error: 'Last name is required' });
    if (!req.body.email) res.status(400).send({ error: 'Email is required' });
    if (!req.body.password) res.status(400).send({ error: 'Password is required' });
    if (isEmpty === true) {
      res.status(400);
      return;
    }
    accounts.push(newAccount);
    res.status(201).json({
      status: 201,
      data: display,
    });
} */

  static delete(req, res) {
    const { accountNumber } = req.params;
    const findAccountNum = accounts.find(acc => acc.accountNumber === parseInt(accountNumber, 10));
    const index = accounts.indexOf(findAccountNum);
    if (findAccountNum) {
      accounts.splice(index, 1);
      res.status(200).send({ message: 'You have succesfully deleted account details' });
      return;
    }
    res.status(400).send({ message: 'You entered a wrong account number' });
  }
}

export default accountController;
