export const getClient = {
	tags: ["Clients"],
	description: "Returns client data by DNI",
	operationId: "getClient",
	parameters: [
		{
			name: "dni",
			in: "path",
			required: true,
			description: "Client DNI",
			schema: {
				type: "integer",
				minimum: 7,
				maximun: 9,
				example: 11111111,
			},
		},
	],
	security: [
		{
			bearerAuth: [],
		},
	],
	responses: {
		"200": {
			description: "Success",
			schema: {
				properties: {
					result: {
						example: "ok",
						type: "string",
					},
					status: {
						example: 200,
						type: "number",
					},
					data: {
						$ref: "#/definitions/ClientRequest",
						type: "object",
					},
				},
			},
		},
		"400": {
			description: "Bad request",
			schema: {
				$ref: "#/definitions/ResponseError",
			},
		},
		"401": {
			description: "Not authorized",
			schema: {
				$ref: "#/definitions/ResponseError",
			},
		},
		"403": {
			description: "Invalid Token",
			schema: {
				$ref: "#/definitions/ResponseError",
			},
		},
		"500": {
			description: "There's been a problem processing your request",
			schema: {
				$ref: "#/definitions/ResponseError",
			},
		},
	},
};
