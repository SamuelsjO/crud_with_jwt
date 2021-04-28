import { getCustomRepository, Repository } from "typeorm";
import { Games } from "../entities/Games";
import { GamesRepository } from "../repositiories/GamesRepository";


interface IGamesServices {

    title: string;
    year: string;
    price: string;
}

class GamesServices {

    private gamesRepository: Repository<Games>

    constructor(){
        this.gamesRepository = getCustomRepository(GamesRepository)
    }

    async create ({title, year, price}: IGamesServices) {
        const createGames = this.gamesRepository.create({
            title,
            year,
            price
        });

        await this.gamesRepository.save(createGames)

        return createGames;
    }

    async findById(id: string) {
        const games = this.gamesRepository.findOne({
            where: {
                id: id
            }
        });

        return games;
    }

    async findAllGames(){
       const games =  await this.gamesRepository
            .createQueryBuilder("games")
            .getMany();
            return games
    }

    async updateGames(id: string, title: string, year: string, price: string){
        await this.gamesRepository
            .createQueryBuilder()
            .update(Games)
            .set({ title, year, price })
            .where("id = :id", {
                id
            }).execute()
    }

    async delete(id: string){
        await this.gamesRepository
            .createQueryBuilder()
            .delete()
            .from(Games)
            .where("id = :id", {
                id
            }).execute()
    }

}

export { GamesServices }