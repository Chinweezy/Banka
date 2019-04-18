import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

chai.use(chaiHttp);
chai.should();

describe('Testing user url', () => {
  it('should get all users record', (done) => {
    chai.request(app)
      .get('/api/v1/users')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

  it('should get a single user record', (done) => {
    const id = 1;
    chai.request(app)
      .get(`/api/v1/users/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

  it('should not get a single user record', (done) => {
    const id = 7;
    chai.request(app)
      .get(`/api/v1/users/${id}`)
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });

  it('should create a new client acount', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        done();
      });
  });
});
