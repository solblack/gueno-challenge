const parentController = {
	successResponse: (res, data, message) => {
		let response = {
			status: "200",
			result: "ok",
			data: data ? data : {},
		};
		return res.status(200).json(response);
	},
	errorResponse: (res, error) => {
		let response = {
			status: error.info ? error.info.status : "500",
			result: "error",
			message: error.message,
			data: error.info ? error.info : {},
		};
		return res.status(response.status).json(response);
	},
	getAxiosError: (error, message, code) => {
		const errorMessage =
			error.response &&
			error.response.status &&
			error.response.status >= 400 &&
			error.response.status < 500
				? message
				: "A problem occured. Please try later";
		const errorCode =
			error.response &&
			error.response.status &&
			error.response.status >= 400 &&
			error.response.status < 500
				? code
				: "clientData.server.error";
		const errorStatus =
			error.response && error.response.status
				? error.response.status
				: "500";
		const newError = new Error(errorMessage);
		newError.info = { code: errorCode, status: errorStatus };
		return newError;
	},
	getValidationError: (validationErrors) => {
		const error = new Error("Validation errors found");
		error.info = { status: "400", validationErrors: validationErrors };
		return error;
	},
};

export default parentController;
