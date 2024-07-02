import { Request, Response, NextFunction } from 'express';
var jwt = require('jsonwebtoken');

interface CustomRequest extends Request {
  id ?: string;
}

interface decodedToken {
  id : string,
  iat: string
}

const authenticateToken = (req: CustomRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err : any, decodedToken: decodedToken) => {
    if (err) return res.sendStatus(403);
    console.log(decodedToken);
    req.id = decodedToken.id;

    next();
  });

};

export default authenticateToken;