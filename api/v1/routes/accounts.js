import accountController from '../controller/v1/accountController';

const accountRoute = (app) => {
  app.get('/api/v1/accounts', accountController.list);
  app.post('/api/v1/accounts', accountController.create);
};

export default accountRoute;
