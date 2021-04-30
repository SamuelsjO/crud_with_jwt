import { Request } from 'express';

interface RequestCustom extends Request {
    token: string;
    loggedUser:
     {
        id: string, 
        email: string
    };

}

export { RequestCustom }