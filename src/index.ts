// import { Application, Router } from "./deps.ts";
// import { oakCors } from "./deps.ts";

// const app = new Application();

// const router = new Router();

// router.get("/", (context) => {
// 	context.response.body = "Hello World!";
// });

// app.use(oakCors());
// app.use(router.routes());
// app.use(router.allowedMethods());

// await app.listen({ port: 8080 });

// deno-lint-ignore-file
// @deno-types="npm:@types/express@4"
import express, { Response } from "npm:express@4.18.2";

const app = express();
import "https://deno.land/x/dotenv@v3.2.2/load.ts";

const message = Deno.env.get("MESSAGE") || "Hello World!";

//@ts-ignore
app.get("/", (_req: Request, res: Response, _next: Function) => {
	res.status(200).json(message);
});

//@ts-ignore
app.get("/notes", (_req: Request, res: Response, _next: Function) => {
	res.status(200).json("Hello World from notes");
});

//@ts-ignore
app.get("/users", (_req: Request, res: Response, _next: Function) => {
	res.status(200).json("Hello World from users");
});

app.get("/test", (_req: Request, res: Response, _next: Function) => {
	res.status(200).json("Hello World from test");
});

app.listen(8080, () => {
	console.log("Server listening on port 8080");
});

export default app;
