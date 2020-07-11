import clientsRouter from "./clients";

function init(app) {
	// redirect to doc
	app.get("/", (req, res) => {
		res.redirect("/api/doc");
	});

	// clients router
	app.use("/api/clients", clientsRouter);
}

const router = { init: init };

export default router;
