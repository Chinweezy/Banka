import accountController from '../controller/v1/accountController';

const accountRoute = (app) => {
  app.get('/api/v1/accounts', accountController.list);
  app.post('/api/v1/accounts', accountController.create);
  // app.post('/api/v1/accounts/:account_id', accountController.retrieve);
  app.delete('/api/v1/accounts/:accountNumber', accountController.delete);
};

export default accountRoute;
