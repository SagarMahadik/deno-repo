import { Application, Router } from "./deps.ts";
import { oakCors } from "./deps.ts";

const app = new Application();

const router = new Router();

router.get("/", (context) => {
	context.response.body = { message: "Hello World!" };
});

app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8080 });

export default app;
