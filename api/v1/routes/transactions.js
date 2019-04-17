import { Router } from 'express';
import transactionController from '../controller/v1/transactionController';

const transactionRoute = Router();
transactionRoute.get('/api/v1/transactions', transactionController.list);
// transactionRoute.post('/api/v1/transactions', transactionController.create);
// transactionRoute.post('/api/v1/accounts/:transactions_id', transactionController.retrieve);
transactionRoute.delete('/api/v1/accounts/:accountNumber', transactionController.delete);

export default transactionRoute;
