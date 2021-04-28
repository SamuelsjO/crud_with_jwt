import { Request, Response, NextFunction } from 'express';
const jwt = require("jsonwebtoken");
require('dotenv').config();

const jwtSecret = process.env.ENV_JWT_SECRET;

class Middleware {
 
    async authAdmin(request: Request, response: Response, next: NextFunction){
        
        const authToken = request.headers['authorization']
        if (authToken != undefined) {
            const bearer = authToken.split('');
            const token = bearer[1];

            jwt.verify(token,jwtSecret, (err, data)=> {
                if (err) {
                    
                } else {
                    
                }
            })

        } else {
            response.status(401);
            response.json({
                err: "Token invalido"
            });
        }
        console.log(authToken)
        console.log(process.env.ENV_JWT_SECRET);
        next();
    }
}

export { Middleware }

    

   


