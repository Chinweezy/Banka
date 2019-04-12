import accounts from '../../models/accounts';

const accountsController = {
  // Get all accounts
  list(req, res) {
    res.status(200).send(accounts);
  },
  create(req, res) {
    const { firstName, lastName, email } = req.body;
    if (!firstName) {
      res.status(400).send({ error: 'First name is required' });
    } if (!lastName) {
      res.status(400).send({ error: 'Last name is required' });
    } if (!email) {
      res.status(400).send({ error: 'Email is required' });
    }
    accounts.push(req.body);
    res.status(201).send(req.body);
  },
};
export default accountsController;
