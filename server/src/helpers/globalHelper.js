const removeSensitiveFields = (obj) => {
  // eslint-disable-next-line no-param-reassign
  delete obj._id;
  // eslint-disable-next-line no-param-reassign
  delete obj._v;
  // eslint-disable-next-line no-param-reassign
  delete obj.password;
};

export default removeSensitiveFields;
