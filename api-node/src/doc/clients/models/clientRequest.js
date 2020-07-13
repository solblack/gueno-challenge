export const ClientRequest = {
	title: "ClientRequest",
	properties: {
		name: {
			type: "string",
			example: "Pedro F.",
		},
		surname: {
			type: "string",
			example: "Gomez",
		},
		birthday: {
			type: "string",
			example: "1990-04-04T14:48:00.000Z",
		},
		scoring: {
			type: "object",
			properties: {
				confidence: {
					example: "0.78",
					type: "number",
				},
				approved: {
					example: "true",
					type: "boolean",
				},
			},
		},
	},
	type: "object",
};
