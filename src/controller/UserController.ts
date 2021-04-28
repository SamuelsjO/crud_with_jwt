import { Request, Response } from 'express';
import { UserService } from '../services/UserServices';
require('dotenv').config();

const jwt = require("jsonwebtoken");


const jwtSecreat = process.env.ENV_JWT_SECRET;

class UserController {

    async authenticate(request: Request, response: Response){
        const { email, password } = request.body;

        const userServices = new UserService();

        if (email != undefined) {

            const users = await userServices.findByUserAuth(email);

            if(users != undefined) {

                if(users.password == password){

                    jwt.sign({id: users.id, email: users.email }, jwtSecreat,{expiresIn: '48h'}, (err, token) => {
                        if (err) {
                            response.status(400);
                            response.json({token: "Falha na geraçao de token" })
                            } else {
                              response.status(200);
                              response.json({token: token })
                          }
                       });

                    } else {
                      response.status(401);
                      response.json({err: "Credencial invalida" })
                    }

            } else {
                    response.status(400);
                    response.json({err: "E-mail enviado é invalido" })
    
                 }
        } else {
          response.status(404);
          response.json({err: "E-mail nao existe em base de dados" })
        }

    }


    async create(request: Request, response: Response) {
        const { name, email, password } = request.body;

        const userServices = new UserService();

        const users = await userServices.create({
            name,
            email,
            password
        });
        
        return response.json(users);
    }
}

export { UserController }