const jwt = require('jsonwebtoken');

const secret = 'ssshhhhhhhhh';
const expiration = '2h';

const withAuth = (req, res, next) => {
  let token = req.query.token || req.headers.authorization;

  if(req.headers.authorization) {
    token = token.split(' ').pop().trim();
  }

  if (!token) {
    return res.status(400).json({ message: 'You need a valid token!' });
  }

  try {
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
  } catch {
    console.log('Invalid token');
    return res.status(400).json({ message: 'Invalid token!' });
  }

  next();

  // if (!req.session.user_id) {
  //   res.redirect('/login');
  // } else {
  //   next();
  // }
};

const signToken = ({ username, email, id }) => {
  const user = { username, email, id };
  return jwt.sign({ data: user }, secret, { expiresIn: expiration });
}

module.exports = { withAuth, signToken };