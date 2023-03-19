import { Application, Request, Response } from "express";

import ProductsData from "../../data/products.json";

export const loadApiEndpoints = (app: Application): void => {
	app.get("/api/products", (req: Request, res: Response) => {
		return res.status(200).send(ProductsData);
	});
	app.get("/api/product/:id", (req: Request, res: Response) => {
		return res.status(200).send(ProductsData);
	});
	app.post("/api/add_product", (req: Request, res: Response) => {
		return res.status(200).send(ProductsData);
	});
	app.put("/api/product/:id", (req: Request, res: Response) => {
		return res.status(200).send(ProductsData);
	});
	app.delete("/api/product/:id", (req: Request, res: Response) => {
		return res.status(200).send(ProductsData);
	});
};
