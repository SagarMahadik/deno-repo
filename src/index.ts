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

//@ts-ignore
app.get("/", (_req: Request, res: Response, _next: Function) => {
	res.status(200).json("Hello World!");
});

//@ts-ignore
app.get("/notes", (_req: Request, res: Response, _next: Function) => {
	res.status(200).json("Hello World from notes");
});

app.listen(8080, () => {
	console.log("Server listening on port 8080");
});
