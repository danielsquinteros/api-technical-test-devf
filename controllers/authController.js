const bcryptjs = require('bcryptjs');
const { generateJWT } = require('../helpers/generate-token');
const { User } = require('../models');

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      // Verification if email exist
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).send({
          msg: 'The User / Password are not correct',
        });
      }
      // The user is active
      if (!user.status) {
        return res.status(400).send({
          msg: 'The User / Password are not correct - status : false',
        });
      }
      // Verification the password
      const validPassword = bcryptjs.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(400).send({
          msg: 'The User / Password are not correct - password',
        });
      }
      // Generate JWT
      const token = await generateJWT(user.id, user.role);

      return res.json({
        token,
        msg: 'Login Okey',
      });
    } catch (error) {
      /* eslint no-console: "off" */
      console.log(error);
      return res.status(500).send({
        msg: 'Contact the administrator',
      });
    }
  },
};
