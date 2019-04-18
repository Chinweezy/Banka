import { Router } from 'express';
import userController from '../controller/v1/userController';

const user = Router();

user.get('/api/v1/users', userController.list);
user.post('/api/v1/auth/signup', userController.create);
user.post('/api/v1/auth/signin', userController.signin);
user.get('/api/v1/users/:id', userController.retrieve);

export default user;
