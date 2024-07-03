import { Request, Response, NextFunction } from 'express';
import UserRepository from '../repository/userRepository';
var jwt = require('jsonwebtoken');

export interface CustomRequest extends Request {
  id?: string;
}

interface decodedToken {
  id: string;
  iat: string;
}

function getFormattedTimestamp(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function authenticateToken(req: CustomRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err: any, decodedToken: decodedToken) => {
    if (err) return res.sendStatus(403);
    console.log(decodedToken);
    req.id = decodedToken.id;

    UserRepository.updateUserLasconnection(req)
    next();
  });
  
}

export { authenticateToken, getFormattedTimestamp };
