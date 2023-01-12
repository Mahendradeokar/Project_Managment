import asyncErrorHandler from '../../helpers/asyncErrorHandler';

const user = {};

user.register = asyncErrorHandler((req, res, next) => {
  const {
    name, email, password, confirmPassword,
  } = req.body;

  // joi
  // validated
  // mongoose
  // express session
});
