import express from "express";
import clientController from "../controllers/clientController";

const clientsRouter = express.Router();

// get client data by DNI (National personal ID in Argentina)
clientsRouter.get("/:dni", clientController.show);

export default clientsRouter;
