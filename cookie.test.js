const request = require('supertest');
const app = require('./cookie');

describe('GET /users', () => {
    test('It should return a JSON object with a list of users', (done) => {
        request(app)
            .get('/users')
            .expect("Content-Type", /json/)
            .expect(200, {name: 'Eric'})
            .end((err, res) => {
                if (err) throw err;
                done();
            })
    })
})
