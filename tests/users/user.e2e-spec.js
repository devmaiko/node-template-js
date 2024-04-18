const request = require('supertest');
const app = require('../../server'); // Assuming your Express app is exported from app.js

describe('User API', () => {
    it('should create a new user', async () => {
        const response = await request(app)
            .post('/users')
            .send({firstName: 'John', lastName: 'Doe', email: 'john@example.com'});

        expect(response.status).toBe(201);
        expect(response.body.user).toHaveProperty('id');
    });
});
