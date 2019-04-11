/* eslint-disable import/no-named-as-default-member */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
// eslint-disable-next-line import/no-named-as-default
import app from '../../app';

chai.use(chaiHttp);

describe('Testing user signup controller', () => {
  it('should register a new user when all the fields are provided', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        firstName: 'chinwe',
        lastName: 'ugoji',
        email: 'test@test.com',
        password: 'Welcome@2019',
        confirmPassWord: 'Welcome@2019',
      })
      .end((error, response) => {
        expect(response.body).to.be.an('object');
        expect(response).to.have.status(201);
        expect(response.body.status).to.equal(201);
        expect(response.body.data).to.be.a('object');
        expect(response.body.data).to.have.property('token');
        expect(response.body.data).to.have.property('id');
        expect(response.body.data).to.have.property('firstName');
        expect(response.body.data).to.have.property('lastName');
        expect(response.body.data).to.have.property('email');
        expect(response.body.data.token).to.be.a('string');
        expect(response.body.data.id).to.be.a('integer');
        expect(response.body.data.firstName).to.be.a('string');
        expect(response.body.data.lastName).to.be.a('string');
        expect(response.body.data.email).to.be.a('string');
        done();
      });
  });
  it('should return an error when the first name is not given', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        lastName: 'ugoji',
        email: 'test@test.com',
        password: 'Welcome@2019',
        confirmPassWord: 'Welcome@2019',
      })
      .end((error, response) => {
        expect(response.body).to.be.an('object');
        expect(response).to.have.status(404);
        expect(response.body.status).to.equal(404);
        expect(response.body).to.have.property('error');
        expect(response.body.error).to.be.a('string');
        expect(response.body.error).to.equal('First name is required');
        done();
      });
  });
  it('should return an error when the last name is not given', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        firstName: 'chinwe',
        email: 'test@test.com',
        password: 'Welcome@2019',
        confirmPassWord: 'Welcome@2019',
      })
      .end((error, response) => {
        expect(response.body).to.be.an('object');
        expect(response).to.have.status(404);
        expect(response.body.status).to.equal(404);
        expect(response.body).to.have.property('error');
        expect(response.body.error).to.be.a('string');
        expect(response.body.error).to.equal('Last name is required');
        done();
      });
  });
});
