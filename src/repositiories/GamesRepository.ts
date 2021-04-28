import { EntityRepository, Repository } from "typeorm";
import { Games } from "../entities/Games"

@EntityRepository(Games)
class GamesRepository  extends Repository<Games> { }
export { GamesRepository}