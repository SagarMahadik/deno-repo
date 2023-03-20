import { Application, Router } from "./deps.ts";
import { oakCors } from "./deps.ts";

const app = new Application();

const router = new Router();

router.get("/", (context) => {
	console.log("Hello World!");
	context.response.body = { message: "Hello World!" };
});

router.get("/note", (context) => {
	console.log("Hello World!");
	context.response.body = { message: "Hello World!" };
});

router.get("/test", (context) => {
	console.log("Hello World!");
	context.response.body = { message: "Hello World from test!" };
});

router.get("/new-test", (context) => {
	console.log("Hello World!");
	context.response.body = { message: "Hello World from test!" };
});

app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8080 });

export default app;
