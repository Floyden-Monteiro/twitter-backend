const UserService = require('../services/user-service');

const userService = new UserService();

const signUp = async (req, res) => {
  try {
    const data = req.body;
    const response = await userService.signUp(data);
    return res.status(201).json({
      success: true,
      message: 'Successflly Created a user',
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(201).json({
      success: false,
      message: 'Error Encountered in creating a user',
      data: {},
      err: error,
    });
  }
};

module.exports = { signUp };
