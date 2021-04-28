import { Request, Response } from "express"
import { GamesServices } from "../services/GamesServices";


class GamesController {

    async create (request: Request, response: Response): Promise<Response> {
        const { title, year, price } = request.body;
        const gamesService = new GamesServices();

        const games = await gamesService.create({
            title,
            year,
            price
        });

        return response.json(games)
    }

    async findById(request: Request, response: Response){
        const { id } = request.params;

        const gamesService = new GamesServices();

        const games = await gamesService.findById(id);

        return response.json(games)

    }

    async findAllGames(request: Request, response: Response){
        const gamesService = new GamesServices();

        const games = await gamesService.findAllGames();
        
        return response.json(games);
    }

    async updateGames(request: Request, response: Response){
        const { id } = request.params;

        const {title, year, price  } = request.body;

        const gamesService = new GamesServices();

        const games = await gamesService.updateGames(id,title, year, price);

        return response.json(games);
    }

    async delete( request: Request, response: Response){

        const { id } = request.params;
        
        const gamesService = new GamesServices();

        const games = await gamesService.delete(id);

        return response.json(games)
    }
}

export { GamesController }