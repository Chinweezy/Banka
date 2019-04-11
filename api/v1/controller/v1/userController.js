import users from '../../models/user';

const userController =  {
  // Get all users
  list(req, res) {
    res.status(200).send(users);
  },

  // Get a single user
  retrieve(req, res) {
    const { id } = req.params.id;
    const findUser = users.find(user => user.id === id);
    if (findUser) {
      res.status(200).send(findUser)
    };
    res.status(400).send({
      error: 'User record not found',
    })
  },

  create(req, res) {
    const {firstName, lastName, email, password, confirmPassword} = req.body;
    if (!firstName) {
      res.status(400).send({
        error: 'First name is required',
      });
    } if (!lastName) {
      res.status(400).send({
        error: 'Last name is required',
      });
    } if (!email) {
      res.status(400).send({
        error: 'Email is required',
      });
    } if (!password) {
      res.status(400).send({
        error: 'You have not entered your password',
      });
    } if (password !== confirmPassword) {
      res.status(400).send({
        error: 'Passwords do not match',
      });
    }
    users.push(req.body)
    const result = users.filter(user => id === user.id);
    res.status(200).send(result);
  }

  static signin(req, res) {
    if (req.body.firstName !== users.firstName) {
      return res.status(400).send({
        status: 400,
        error: 'You have entered the wrong first name',
      });
    } if (req.body.lastName !== users.lastName) {
      return res.status(400).send({
        status: 400,
        error: 'You have entered the wrong last name',
      });
    } if (req.body.email !== users.email) {
      return res.status(400).send({
        status: 400,
        error: 'You have entered the wrong email',
      });
    } if (req.body.password !== users.password) {
      return res.status(400).send({
        status: 400,
        error: 'You have entered the wrong password',
      });
    }
    const newSignin = {
      token: '45erkjherht45495783',
      id: users.id,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      type: 'client',
      isAdmin: false,
    };
    return res.status(201).send({
      status: 201,
      message: 'Sign in successful',
      data: newSignin,
    });
  }
}
export default userController;
