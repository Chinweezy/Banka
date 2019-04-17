import { Router } from 'express';
import accountController from '../controller/v1/accountController';

const account = Router();

account.get('/api/v1/accounts', accountController.list);
// account.post('/api/v1/accounts', accountController.create);
// accountRoute.post('/api/v1/accounts/:account_id', accountController.retrieve);
account.delete('/api/v1/accounts/:accountNumber', accountController.delete);

export default account;
