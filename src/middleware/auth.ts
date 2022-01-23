import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import { userRepository } from '../resources/users/user.memory.repository';
import { JWT_SECRET_KEY } from '../common/config';

export interface TokenInterface {
  userId: string;
  login: string;
}

export const auth = asyncHandler(async (req: Request, _res: Response, next: NextFunction) => {
  if (req.method === 'OPTIONS') {
    return next(); // allowing options as a method for request
  }

  try {
    let sessionToken = req.headers.authorization;
    if (sessionToken && sessionToken.indexOf('Bearer ') === 0) {
      sessionToken = sessionToken.slice(7, sessionToken.length);
    }

    if (!sessionToken) {
      throw new Error('Not authorized to access this resource. Auth token is not supplied');
    }

    const decoded = jwt.verify(sessionToken, JWT_SECRET_KEY!) as TokenInterface;

    if (!decoded || !decoded.userId) {
      throw new Error('Not authorized to access this resource. Token is not valid');
    }

    const user = await userRepository.findOne(decoded.userId);
    if (!user) throw new Error('Not authorized to access this resource. Token is not valid');
  } catch (error) {
    throw new Error('UNAUTHORIZED');
  }

  return next();
});
