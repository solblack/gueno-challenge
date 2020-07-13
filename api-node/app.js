import express from "express";
import router from "./src/routes/index";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./src/doc/swagger.js";
import dotenv from "dotenv";
import cors from "cors";

// config .env file
dotenv.config();

// Set up of the express app
const APP = express();
APP.use(express.json());
APP.use(express.urlencoded({ extended: false }));

// Swagger setup
APP.use("/api/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
APP.get("/api/swagger.json", function (req, res) {
	res.setHeader("Content-Type", "application/json");
	res.send(swaggerDocument);
});

// CORS setting
APP.use(cors());

//  Router connection
router.init(APP);

APP.listen(process.env.PORT, () => {
	console.log(`server running on port ${process.env.PORT}`);
});
