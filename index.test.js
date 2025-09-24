const request = require('supertest');
const server = require('./index');

describe('GET /', () => {
  it('should return "Hello from the Docker container!"', async () => {
    const res = await request(server).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello from the Docker container!');
  });
});

afterAll(done => {
  server.close(() => {
    done();
  });
});