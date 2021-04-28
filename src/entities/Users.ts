import { v4 as uuid } from 'uuid';
import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity("users")
class Users {

    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    email:  string

    @Column()
    password: string

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }

}

export { Users }