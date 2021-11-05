import bcrypt from 'bcrypt';
import { mockUser } from '../mockDatabase.js';

async function signIn (req, res) {

    const {
        email,
        password,
    } = req.body;

    const hashPassword = bcrypt.compareSync(password, mockUser.hashPassword);

    if (hashPassword) {

        res.send({
            token: mockUser.sessionToken,
        });
        return;
    }

    res.sendStatus(404)

} 

export {
    signIn,
}