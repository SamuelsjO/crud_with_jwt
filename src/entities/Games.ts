import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("games")
class Games {

    @PrimaryColumn()
    id: string

    @Column()
    title: string

    @Column()
    year: string

    @Column()
    price: string

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }


}

export { Games }