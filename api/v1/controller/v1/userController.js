import users from '../../models/user';

const userController = {
  // Get all users
  list(req, res) {
    res.status(200).send(users);
  },

  // Get a single user
  retrieve(req, res) {
    const { id } = req.params;
    const findUser = users.find(user => user.id === parseInt(id, 10));
    if (findUser) {
      res.status(200).send({
        status: 200,
        data: findUser,
      });
      return;
    }
    res.status(400).send({
      status: 400,
      error: 'User record not found',
    });
  },

  // Create a user account
  create(req, res) {
    const newUser = {
      id: users.length + 1,
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
      confirmPassword: req.body.confirmPssword,
      type: req.body.type, // client or staff
      isAdmin: req.body.isAdmin, // true = staff, false = client
    };

    const display = {};
    // eslint-disable-next-line quotes
    display.token = "45erkjherht45495783";
    display.id = newUser.id;
    display.firstName = newUser.firstName;
    display.lastName = newUser.lastName;
    display.email = newUser.email;

    const isEmpty = Object.values(newUser).every(x => (x === null || x === '""'));
    if (!req.body.firstName) {
      res.status(400).send({ status: 400, error: 'First name required' });
    } if (!req.body.lastName) {
      res.status(400).send({ status: 400, error: 'Last name required' });
    } if (!req.body.email) {
      res.status(400).send({ status: 400, error: 'Email required' });
    } if (!req.body.password) {
      res.status(400).send({ status: 400, error: 'Password required' });
    } if (req.body.password !== req.body.confirmPassword) {
      res.status(400).send({ status: 400, error: 'Passwords do not match' });
    } if (isEmpty === true) {
      res.status(400);
      return;
    }
    users.push(newUser);
    res.status(201).json({
      status: 201,
      data: display,
    });
  },
};

export default userController;
