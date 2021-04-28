import { Router } from "express";
import { GamesController } from "./controller/GamesController";
import { UserController } from "./controller/UserController";
import { Middleware } from "./middleware/Middleware";


const router = Router();

const gamesController = new GamesController()
const userController = new UserController();
const middleware = new Middleware();

const authAdmin = middleware.authAdmin;


//games
router.post("/games", gamesController.create);
router.get("/games/:id", gamesController.findById);
router.get("/findGames", authAdmin, gamesController.findAllGames)
router.put("/:id", gamesController.updateGames);
router.delete("/:id", gamesController.delete)

//users
router.post("/auth", userController.authenticate);
router.post("/userCreate", userController.create)


export {router}