const request = require('supertest');
const app = require('./index');

describe('CORS middleware', () => {
  it('should allow cross-origin requests from allowed origins', async () => {
    const res = await request(app).get('/public').set('Origin', 'http://localhost:8080');
    expect(res.headers['access-control-allow-origin']).toEqual('http://localhost:8080');
  });

  it('should not allow cross-origin requests from unallowed origins', async () => {
    const res = await request(app).get('/public').set('Origin', 'http://localhost:9090');
    expect(res.headers['access-control-allow-origin']).toBeUndefined();
  });
});

describe('Authentication middleware', () => {
  it('should return 401 when no credentials are provided', async () => {
    const res = await request(app).get('/protected');
    expect(res.statusCode).toEqual(401);
  });

  it('should return 401 when invalid credentials are provided', async () => {
    const invalidCredentials = Buffer.from('invalid:credentials').toString('base64');
    const res = await request(app).get('/protected').set('Authorization', `Basic ${invalidCredentials}`);
    expect(res.statusCode).toEqual(401);
  });

  it('should return 200 when valid credentials are provided', async () => {
    const credentials = Buffer.from('user:password').toString('base64');
    const res = await request(app).get('/protected').set('Authorization', `Basic ${credentials}`);
    expect(res.statusCode).toEqual(200);
  });
});
