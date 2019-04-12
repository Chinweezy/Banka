import userController from '../controller/v1/userController';

const UserRoute = (app) => {
  app.get('/api/v1/users', userController.list);
  app.post('/auth/signup', userController.create);
  app.get('/api/v1/users/:id', userController.retrieve);


  /* router.post('/', (req, res, next) => {
    const newUser = {
      userid: req.body.userid,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      type: req.body.type,
      isAdmin: req.body.isAdmin,
    };
    res.status(201).json({
      message: 'Handling POST requests to /users',
      createdUser: newUser,
    });
  });

  router.get('/:userid', (req, res, next) => {
    const id = req.params.userid;
    if (id === 'special') {
      res.status(200).json({
        message: 'You discovered the special id',
        id,
      });
    } else {
      res.status(200).json({
        message: 'You entered an id',
      });
    }
  });

  router.patch('/:userid', (req, res, next) => {
    res.status(200).json({
      message: 'Updated user',
    });
  });

  router.delete('/:userid', (req, res, next) => {
    res.status(200).json({
      message: 'Deleted user',
    });
  }); */
};

export default UserRoute;
