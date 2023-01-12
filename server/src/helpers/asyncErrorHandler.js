const asyncErrorHandler = (asyncFunc) => (
  (req, res, next) => (
    asyncFunc(req, res, next).catch(next)
  )
);

export default asyncErrorHandler;
