class Auth {
    jwt(req, res, next) {
        // TODO: this should call the authentication service
        console.log('Middleware called');
        next();
    };
}

module.exports = new Auth();
