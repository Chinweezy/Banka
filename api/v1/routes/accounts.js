import { Router } from 'express';
/* import userController from '../controller/v1/userController'; */

const router = Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Viewing all accounts',
  });
});

router.post('/', (req, res, next) => {
  const newAccount = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  };
  res.status(201).json({
    message: 'Account created successfully',
    createdAccount: newAccount,
  });
});

router.get('/:accountid', (req, res, next) => {
  res.status(200).json({
    message: 'Account details',
    accountid: req.params.accountid,
  });
});

router.delete('/:accountnumber', (req, res, next) => {
  res.status(200).json({
    message: 'Account deleted successfully',
    accountnumber: req.params.accountnumber,
  });
});

export default router;
