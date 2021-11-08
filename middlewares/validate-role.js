const isAdminRole = (req, res, next) => {
  if (!req.user) {
    return res.status(500).send({
      message: 'You want to verify without validating the token',
    });
  }
  const { role, name } = req.user;
  if (role !== 'ADMIN_ROLE') {
    return res.status(401).send({
      message: `${name} is not admin`,
    });
  }

  return next();
};

const isRole = (req, res, next) => {
  if (!req.user) {
    return res.status(500).send({
      message: 'You want to verify without validating the token',
    });
  }
  const { role, name } = req.user;
  if (role !== 'ADMIN_ROLE' && role !== 'USER_ROLE') {
    return res.status(401).send({
      message: `${name} is not admin and user role`,
    });
  }

  return next();
};
module.exports = {
  isAdminRole,
  isRole,
};
