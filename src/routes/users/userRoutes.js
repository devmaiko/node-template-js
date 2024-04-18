const createRouter = require("../utils");
const UserController = require("../../controllers/users/userController");
const auth = require("../../middleware/auth/auth");
const paramsValidator = require("../../middleware/users/userParamsValidator");

const router = createRouter();

router.post('/', auth.jwt, paramsValidator.createUser, async (req, res) => {
    return UserController.createUser(req, res);
});

module.exports = router;
