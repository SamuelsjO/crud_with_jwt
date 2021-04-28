import { getCustomRepository, Repository } from 'typeorm';
import { Users } from '../entities/Users';
import { UserRepository } from '../repositiories/UserRepository';


interface IUserService{
    name: string;
    email: string;
    password: string;

}

class UserService {

    private userRepository: Repository<Users>;

    constructor(){
        this.userRepository = getCustomRepository(UserRepository);
    }

    async findByUserAuth(email){
            const users = this.userRepository.findOne({
                where: {
                    email: email
                }
            })
            return users;
    }

    async create({name, email, password}: IUserService){
        const createUsers = this.userRepository.create({
            name,
            email,
            password
        })

        await this.userRepository.save(createUsers);

        return createUsers;

    }

}

export { UserService }