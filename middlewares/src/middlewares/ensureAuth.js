import { mockUser } from '../mockDatabase.js';

function ensureAuth(req, res, next) {
  try {
    const authorization = req.headers['authorization'];
    const token = authorization?.split('Bearer ')[1];

    if (token !== mockUser.sessionToken) {
        res.sendStatus(401);
        return;
    }

    next();
  } catch (err) {
    res.sendStatus(500)
  }
}

export default ensureAuth;