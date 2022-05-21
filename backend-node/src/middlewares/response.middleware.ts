import { Response } from 'express';

/**
 * Express.js middlawares to handle common requests/response
 */

/**
 * @param res Response
 * @param status number
 */
const success =
  (res: Response, status = 200) =>
  body =>
    body ? void res.status(status).json(body) : undefined;

/**
 * @param res Response
 */
const notFound = (res: Response) => body => body ? body : void res.status(404).end();

export { success, notFound };
