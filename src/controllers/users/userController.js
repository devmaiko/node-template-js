const User = require('../../models/userModel');

class UserController {
    async createUser(req, res) {
        try {
            const {firstName, lastName, email} = req.body;
            const newUser = await User.create({
                firstName,
                lastName,
                email
            });
            res.status(201).json({message: 'User created successfully', user: newUser});
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = new UserController();
