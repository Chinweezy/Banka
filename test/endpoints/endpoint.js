import express from 'express';
import userdb from '../../models/user';

const endApp = express();

// get all users

endApp.get('/api/v1/users', (req, res) => {
  res.status(200).send({
    success: 'true',
    messgae: 'users retrieved succesfully',
    users: userdb,
  });
});
const port = 5000;

endApp.listen(port, () => {
  console.log(`server running on port ${port}`);
});
