import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

chai.use(chaiHttp);
chai.should();

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
        type: 'client',
        isAdmin: false,
      })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
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
        type: 'client',
        isAdmin: false,
      })
      .end((err, res) => {
        res.should.have.status(400);
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
        type: 'client',
        isAdmin: false,
      })
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });

  it('should return an error when the email is not given', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        firstName: 'chinwe',
        lastName: 'ugoji',
        password: 'Welcome@2019',
        confirmPassWord: 'Welcome@2019',
        type: 'client',
        isAdmin: false,
      })
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });

  it('should return an error when the passwords do not match', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        firstName: 'chinwe',
        lastName: 'ugoji',
        email: 'test@test.com',
        password: 'Welcome@2019',
        confirmPassWord: 'Welcome@2018',
        type: 'client',
        isAdmin: false,
      })
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });

  it('should return an error when the type of user is not stated', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        firstName: 'chinwe',
        lastName: 'ugoji',
        email: 'test@test.com',
        password: 'Welcome@2019',
        confirmPassWord: 'Welcome@2018',
        isAdmin: false,
      })
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});
