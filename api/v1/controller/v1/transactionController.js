import transactions from '../../models/transactions';

class transactionController {
  // Get all users
  static list(req, res) {
    res.status(200).send({ status: 200, data: transactions });
  }

  static debit(req, res) {
    let add = '';

    const newTransaction = {};
    // eslint-disable-next-line no-use-before-define
    newTransaction.id = transactions.length + 1;
    newTransaction.accountNumber = req.body.accountNumber;
    newTransaction.amount = req.body.amount;
    newTransaction.cashier = req.body.cashier;
    newTransaction.transactionType = '"credit';
    newTransaction.accountBalance = parseInt(add, 10);

    const findTrans = transactions.find(trans => trans.accountNumber === newTransaction.amount);

    const transaction = {
      id: newTransaction.id,
      createdOn: new Date(),
      type: newTransaction.transactionType,
      accountNumber: newTransaction.amount,
      cashier: newTransaction.cashier,
      amount: newTransaction.amount,
      oldBalance: findTrans.oldBalance,
      newBalance: newTransaction.accountBalance,
    };
    add = transaction.oldBalance - transaction.amount;

    const isEmpty = Object.values(transaction).every(x => (x === null || x === '""'));
    if (!req.body.accountNumber) {
      res.status(400).send({ status: 400, error: 'Enter account number' });
    } if (!req.body.amount) {
      res.status(400).send({ status: 400, error: 'Enter amount' });
    } if (!req.body.cashier) {
      res.status(400).send({ status: 400, error: 'Enter cashier id' });
    } if (isEmpty === true) {
      res.status(400);
      return;
    }
    transactions.push(transaction);
    res.status(201).json({
      status: 201,
      data: newTransaction,
    });
  }
}

export default transactionController;
