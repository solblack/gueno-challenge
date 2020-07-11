import axios from "axios";
import parentController from "./parentController";
import dotenv from "dotenv";
// config .env file
dotenv.config();
const GUENO_BASE_URL = process.env.GUENO_URL;

const clientController = {
	show: async (req, res) => {
		try {
			const clientCuit = await clientController.getCuit(req.params.dni);
			const clientData = await clientController.getClientData(clientCuit);

			return parentController.successResponse(res, clientData);
		} catch (error) {
			return parentController.errorResponse(res, error);
		}
	},
	getCuit: async (dni) => {
		try {
			const response = await axios.get(GUENO_BASE_URL + "getCuit/" + dni);
			const clientCuit = response.data.data.cuit;
			return clientCuit;
		} catch (error) {
			const error = parentController.getAxiosError(
				error,
				"No cuit found with the data provided",
				"cuit.not.found"
			);
			throw error;
		}
	},
	getClientData: async (cuit) => {
		try {
			const response = await axios.get(
				GUENO_BASE_URL + "getUserData/" + cuit
			);
			const clientData = response.data.data;
			return clientData;
		} catch (error) {
			const error = parentController.getAxiosError(
				error,
				"No data found with the cuit provided",
				"clientData.not.found"
			);
			throw error;
		}
	},
};

export default clientController;
