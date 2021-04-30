import { Response } from "express"
import { RequestCustom } from "../interface/InterfaceRequest";
import { GamesServices } from "../services/GamesServices";


class GamesController {

    async create (request: RequestCustom, response: Response): Promise<Response> {
        const { title, year, price } = request.body;
        const gamesService = new GamesServices();

        const games = await gamesService.create({
            title,
            year,
            price
        });

        return response.json(games)
    }

    async findById(request: RequestCustom, response: Response){
        const { id } = request.params;

        const gamesService = new GamesServices();

        const games = await gamesService.findById(id);

        return response.json(games)

    }

    async findAllGames(request: RequestCustom, response: Response){
        const gamesService = new GamesServices();

        const games = await gamesService.findAllGames();
        
        return response.json(games);
    }

    async updateGames(request: RequestCustom, response: Response){
        const { id } = request.params;

        const {title, year, price  } = request.body;

        const gamesService = new GamesServices();

        const games = await gamesService.updateGames(id,title, year, price);

        return response.json(games);
    }

    async delete( request: RequestCustom, response: Response){

        const { id } = request.params;
        
        const gamesService = new GamesServices();

        const games = await gamesService.delete(id);

        return response.json(games)
    }
}

export { GamesController }