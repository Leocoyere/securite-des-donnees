import { Request, Response, NextFunction } from 'express';
const crypto = require('crypto');
require('dotenv').config();

const key = process.env.AES_KEY;
const iv = process.env.AES_IV;


if (!key || !iv) {
    throw new Error('AES_KEY et AES_IV doivent être définis dans les variables d\'environnement');
}

console.log(key.length)
console.log(iv.length)
if (key.length !== 32 || iv.length !== 16) {
    throw new Error('AES_KEY doit être de 32 caractères et AES_IV de 16 caractères');
}

const encode = (req: Request, res: Response, next: NextFunction) => {
    if (req.body.password != undefined) {
        let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), Buffer.from(iv));
        req.body.password = cipher.update(req.body.password);
        req.body.password = Buffer.concat([req.body.password, cipher.final()]);
        req.body.password = req.body.password.toString('hex');
    }
    if (req.body.cb != undefined) {
        let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), Buffer.from(iv));
        req.body.cb = cipher.update(req.body.cb);
        req.body.cb = Buffer.concat([req.body.cb, cipher.final()]);
        req.body.cb = req.body.cb.toString('hex');
    }
    next()
};

export default encode;