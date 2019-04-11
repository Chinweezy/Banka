import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

chai.use(chaiHttp);

describe('Testing user url', () => {
  it('should get all users record', (done) => {
    chai.request(app)
      .get('/api/v1/users')
      .end((error, response) => {
        expect(response).to.be.an('object');
        expect(response.body.status).to.be.equal(200);
        done();
      });
  });
  it('should get a single user record', (done) => {
    chai.request(app)
      .get('/api/v1/users/:id')
      .end((error, response) => {
        expect(response.body).to.be.an('object');
        expect(response).to.have.status(200);
        done();
      });
  });
  it('should not get a single user record', (done) => {
    chai.request(app)
      .get('/api/v1/users/:id')
      .end((error, response) => {
        expect(response).to.have.status(404);
        done();
      });
  });
  it('should create a new client acount', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .end((error, response) => {
        expect(response).to.be.an('object');
        expect(response).to.have.status(201);
        done();
      });
  });

});
