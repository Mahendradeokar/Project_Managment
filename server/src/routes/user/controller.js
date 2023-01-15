import User from './userModel.js';
import asyncErrorHandler from '../../helpers/asyncErrorHandler.js';

import userErrors from '../../constant/Errors.js';
import removeSensitiveFields from '../../helpers/globalHelper.js';

const userController = {};

userController.register = asyncErrorHandler(async (req, res) => {
  // joi validation
  // create user
  const {
    email, name, password,
  } = req.body;
  const user = await User({
    email,
    name,
    password,
  }).save();

  // check user created or not
  if (!user) {
    throw new Error(userErrors.NOT_CREATED);
  }

  res.json({
    isSuccess: true,
    data: removeSensitiveFields(user),
  });
});

export default userController;
