const UserController = require('../users/userController');

describe('UserController', () => {
    describe('createUser', () => {
        it('should create a new user', async () => {
            const req = {body: {firstName: 'John Doe', lastName: 'john@example.com', email: '30'}};
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };

            await UserController.createUser(req, res);

            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({message: 'User created successfully', user: expect.any(Object)});
        });
    });
});
