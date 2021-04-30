import { Response, NextFunction, Request } from 'express';
import { RequestCustom } from '../interface/InterfaceRequest';

const jwt = require("jsonwebtoken");
require('dotenv').config();

const jwtSecret = process.env.ENV_JWT_SECRET;

class Middleware {
 
    async authAdmin(request: Request, response: Response, next: NextFunction){
        
        const authToken = request.headers['authorization']
        if (authToken != undefined) {
            const bearer = authToken.split(' ');
            const token = bearer[1];

            console.log(token)

            jwt.verify(token,jwtSecret, (err: any, data: any)=> {
                if (err) {
                   response.json({err: "Token invalido"})
                } else {
                   
                   next();

                }
            })

        } else {
            response.status(401);
            response.json({
                err: "Token invalido"
            });
        }
        
    }
}

export { Middleware }

    

   


